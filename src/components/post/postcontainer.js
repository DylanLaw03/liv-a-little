import { Post } from "./post";
import { Box } from "@material-ui/core";

// container to hold an entire page of posts
export const PostContainer = props => {
    return (
        <Box className="post-container">
            <Post imageURL="https://res.cloudinary.com/djwqlsik1/image/upload/v1652654234/post-images/ltjravdcxsohwsmln0yu.jpg" postContent="This is a fake post" postNum="5"/>
        </Box>
    )
}