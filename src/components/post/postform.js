import React, { useState } from 'react';

export const PostForm = (props) => {
    // holds post info, states to handle change
    const [postBody, setPostBody] = useState('Empty Post');

    const blobToBase64 = blob => {
        const reader = new FileReader();
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
    const handleSubmit = (event) => {
        event.preventDefault();
        // get file input and convert file to base 64
        const fileInput = document.querySelector("input[type=file]");
        var postImgPromise = blobToBase64(fileInput.files[0])
        var postImg = '';
        // handle promise, if resolved, add data to response
        postImgPromise.then(value => {
            
            fetch("https://liv-a-little-api.herokuapp.com/uploadPost", {
                method: "POST",
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify({
                    "postImg": value
               })
            })

        }).catch(err => {
            console.log(err);
        });

    }
    // return form
    return (
        <div className='postForm'>
            <p>Create New Post</p>
            <form onSubmit={handleSubmit} encType="mutlipart/form-data">
                    <label htmlFor="img">Image </label>
                    <input type="file" id="img"  accept="image/png, image/jpeg"/>
                <br />
                    <label htmlFor="postBody">Post</label>
                    <textarea id="postBody" rows="6" cols="100" onChange={handlePostBodyChange} value={postBody}/>
                <br />
                    <input type="submit" />
            </form>
        </div>
    )
}