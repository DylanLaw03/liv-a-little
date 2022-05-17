import React from 'react';
import { PostForm } from '../components/new-post/postform';
import { PostContainer } from '../components/post/postcontainer';

export const HomePage = (props) => {
    return (
        <box className='home'>
            <PostForm />
            <PostContainer />
        </box>
    )
}