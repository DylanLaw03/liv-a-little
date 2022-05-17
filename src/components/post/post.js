import { Box } from "@material-ui/core";
import React from "react";


// container for individual posts, pass imageURL, postContent, and postNum
export const Post = props => {
    // open bigger version of image in new page on click
    const handleClick = e => {
        e.preventDefault()
        window.open(props.imageURL);
    }
    // return post box
    return (
        <Box className="post-box">
            <Box className="post-num"># {props.postNum}</Box>
            <div className="post-box-inner-wrapper">
                <Box className="post-image-box" onClick={handleClick}><img className="post-image" src={props.imageURL} alt='Failed to load.'/></Box>
                <Box className="post-content">{props.postContent}</Box>
            </div>
        </Box>
    )
}