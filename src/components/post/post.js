import { Box } from "@material-ui/core";
import React from "react";

// container for individual posts, pass imageURL, postContent, and postNum
export const Post = props => {
    return (
        <Box className="post-box">

            <img src={props.imageURL} alt='Failed to load.'/>
        </Box>
    )
}