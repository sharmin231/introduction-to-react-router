import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";



const Posts = () => {
    const posts = useLoaderData();

    const style = {
        display: 'grid',

    gap:'20px'
    }
    
    return (
        <div style={style}>
            <h2>All post here: {posts.length}</h2>
            {
                posts.map(post=><Post key={post.id} post=
                    {post}></Post>)
            }
        </div>
    );
};

export default Posts;