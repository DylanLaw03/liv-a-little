import { Post } from "./post";
import { Box } from "@material-ui/core";
import { useEffect, useState } from "react";



// container to hold an entire page of posts
// pass in page number
export const PostContainer = props => {
    // posts State for retrieving from API
    const [postsState, setPostsState] = useState({});
    // arr to hold post Components
    let posts = []


    const getPosts = async (lowerBound, upperBound) => {
        // POST to /getPosts
        const response = await fetch("https://liv-a-little-api.herokuapp.com/getPosts",{
        method: "POST",
        headers: {
            'accept': 'application/json',
            'Content-Type': "application/json"
          },
        body: JSON.stringify({"lowerBound": lowerBound,
                              "upperBound": upperBound})
        })
        // res to JSON
        .then(response => response.json())
        // update posts state
        .then(response => {
            setPostsState(response);
        })
    };

    // use useEffect to render posts once, on page load
    useEffect(() => {
        getPosts("1", "11");
    }, []); // empty arr means no dependency states

    // build posts for container
    for (let i = 0; i < postsState.length; i++) {
        posts.push(
            <Post imageURL={postsState[i].imageurl} postContent={postsState[i].postbody} postNum={postsState[i].postid} key={postsState[i].postid}/> 
        )
    }

    // return container
    return (
        <Box className="post-container">
            {posts}
        </Box>
    )
}