import React, { useState } from 'react';
import { PostForm } from '../components/new-post/postform';
import { PostContainer } from '../components/post/postcontainer';
import { Box, Button } from '@material-ui/core';

export const HomePage = (props) => {

    const [pageNum, setPageNum] = useState(1);
    
    //buttons to handle next page and prev page
    const handleNextPageClick = (e) => {
        let newPageNum = pageNum + 1;
        setPageNum(newPageNum);
        console.log(newPageNum);
    }

    const handlePrevPageClick = () => {
        setPageNum(pageNum - 1)
        console.log(pageNum)
    } 

    return (
        <Box className='home'>
            <PostForm />
            <PostContainer pageNum={pageNum}/>

            <div className='prev-page-button-div'>
                <Button className='prev-page-button'
                variant='contained'
                disableElevation 
                onClick={handlePrevPageClick}>
                    Previous Page
                </Button>
            </div>

            <div className='next-page-button-div'>
                <Button className='next-page-button'
                variant='contained'
                disableElevation 
                onClick={handleNextPageClick}>
                    Next Page
                </Button>
            </div>
        </Box>
    )
}