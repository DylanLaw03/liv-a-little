import React, { useState } from 'react';
import { PostForm } from '../components/new-post/postform';
import { PostContainer } from '../components/post/postcontainer';
import { Box, Button } from '@material-ui/core';

export const HomePage = (props) => {


    //buttons to handle next page and prev page

    return (
        <Box className='home'>
            <PostForm />
            <PostContainer pageNum={1}/>

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
                onClick={console.log('wyd')}>
                    Next Page
                </Button>
            </div>
        </Box>
    )
}