import React, {useState, useEffect} from 'react';
import axios from 'axios';

function PostsWithAxios() {
    const [posts, setPosts] = useState( [] );

    useEffect(() => {
        const axiosPosts = async() => {
            const response = await axios('https://jsonplaceholder.typicode.com/posts');
            setPosts(response.data);
        };
        axiosPosts();
    }, []);

    // get data from the state
    const usePosts = posts.map((post) => {
        return <div>
                <h3>{post.id}</h3>
                <h4>{post.title}</h4>
                <p>{post.body}</p>
            </div>
    })

    return(
        <>
            <h1>Axios with useState and useEffect</h1>
            <h2>Dummy API - https://jsonplaceholder.typicode.com/posts</h2>
            <div className="axioscontainer">
                {posts && usePosts}
            </div>
        </>
    );
}

export default PostsWithAxios;