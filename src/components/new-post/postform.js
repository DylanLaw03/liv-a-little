import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import { Box } from '@material-ui/core';

// function to upload post....
// send postImg as base64 string and postText as string, returns the http respone
const uploadPost = async (postBody, postImg) => {

    console.log(postImg);
    // POST to /uploadPost
    let response = await fetch("https://liv-a-little-api.herokuapp.com/uploadPost",{
    method: "POST",
    headers: {
        'accept': 'application/json',
        'Content-Type': "application/json"
      },
    body: JSON.stringify({"postImg": postImg,
                          "postBody": postBody})
    })

    return response;
}

export const PostForm = (props) => {

    // holds post info, states to handle change
    const [postBody, setPostBody] = useState('Empty Post');

    // converts blob to base 64 string
    const blobToBase64 = blob => {
        // create reader and cast to base64
        const reader = new FileReader();

        // promise, asynchronous response
        reader.readAsDataURL(blob);

        return new Promise(resolve => {
          reader.onloadend = () => {
            resolve(reader.result);
          };
        });
    };

    // handlers for information change
    const handlePostBodyChange = (event) => {
        setPostBody(event.target.value)
    }
    
    // handle submission
    const handleSubmit = async (event) => {
        event.preventDefault();

        // get file input and convert file to base 64
        const fileInput = document.querySelector("input[type=file]");
        var postImgPromise = blobToBase64(fileInput.files[0])

        // handle promise, if resolved, submit post, otherwise alert user
        postImgPromise.then(value => {
            uploadPost(postBody, value);
        }).then(() => {
            alert("Post Successfully Submitted")
        }).catch(err => {
            alert("There was an error submitting your post. Please try again later.")
            console.log(err);
        });

    }
    
    // return form
    return (
        <Box className='post-form-box'>
            <div className='post-form-div'>
                <form className='post-form' encType="mutlipart/form-data">
                    <p className='post-form-title'>Create New Post</p>

                    <div className='post-image-submission-div'>
                        <label className='image-label' htmlFor="img">
                            <div>
                                <input className='image-input' type="file" id="img" accept="image/png, image/jpeg"/>
                            </div>
                            <Button className='post-image-submission-button'
                            component='span'
                            color="primary"
                            variant="contained"
                            disableElevation>
                                + UPLOAD PHOTO
                            </Button>
                        </label>
                    </div>
                    
                    <div className='post-text-input-div'>
                        <TextField className='post-text-input-field'
                        multiline
                        id="postBody"
                        minRows={6}
                        fullWidth
                        onChange={handlePostBodyChange}
                        value={postBody}
                        InputProps={{ disableUnderline: true }}
                        />
                        <br />
                    </div>
                    <div className='post-submit-button-div'>
                        <Button className='post-submit-button'
                        variant='contained'
                        disableElevation 
                        onClick={handleSubmit}>Submit</Button>
                    </div>

                </form>
            </div>
        </Box>
    )
}