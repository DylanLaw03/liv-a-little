import React, { useEffect, useState } from 'react';
import { PostForm } from '../components/new-post/postform';
import { PostContainer } from '../components/post/postcontainer';
import { Box, Button } from '@material-ui/core';


export const HomePage = (props) => {

    const [maxPostNum, setMaxPostNum] = useState(1);
    const [pageNum, setPageNum] = useState(1);
    
    const getMaxPost = async () => {
        // get /getMaxPost
        fetch("https://liv-a-little-api.herokuapp.com/getMaxPost",{
        method: "GET",
        headers: {
            'accept': 'application/json',
            'Content-Type': "application/json"
        }})
        // res to JSON
        .then(response => response.json())
        // update posts state
        .then(response => {
            setMaxPostNum(response[0].max);
        })
    }

    useEffect(() => {
        getMaxPost();
    }, []);

    //buttons to handle next page and prev page
    const handleNextPageClick = (e) => {
        // verify more pages exist before changing
        if (pageNum * 10 < maxPostNum) {
            setPageNum(pageNum + 1);
        }
    }

    const handlePrevPageClick = () => {
        // verify not on first page
        if (pageNum > 1) {
            setPageNum(pageNum - 1)
        }
        console.log(pageNum)
    } 

    return (
        <Box className='home'>
            <PostForm />
            <PostContainer pageNum={pageNum}/>
            <Box className='change-page-button-box'>
                <div className='prev-page-button-div'>
                    <Button className='prev-page-button'
                    variant='contained'
                    disableElevation 
                    onClick={handlePrevPageClick}>
                        {'<<<'}
                    </Button>
                </div>

                <div className='next-page-button-div'>
                    <Button className='next-page-button'
                    variant='contained'
                    disableElevation 
                    onClick={handleNextPageClick}>
                        {'>>>'}
                    </Button>
                </div>
            </Box>
        </Box>
    )
}