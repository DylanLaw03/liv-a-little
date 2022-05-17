import React, { useState } from 'react';
import { PostForm } from '../components/new-post/postform';
import { PostContainer } from '../components/post/postcontainer';
import { Box, Button } from '@material-ui/core';

export const HomePage = (props) => {

    const handleNextPageClick = () => {
        props.pageNum + 1;
        console.log(props.pageNum);
    }

    console.log(props.pageNum)

    //buttons to handle next page and prev page

    return (
        <Box className='home'>
            <PostForm />
            <PostContainer pageNum={props.pageNum}/>

            <div className='prev-page-button-div'>
                <Button className='prev-page-button'
                variant='contained'
                disableElevation 
                onClick={console.log("WYD")}>
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