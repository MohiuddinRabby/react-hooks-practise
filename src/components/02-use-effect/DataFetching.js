import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const DataFetching = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        Axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                console.log(res.data)
                setPosts(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    },[])
    return (
        <div>
            {
                posts.map(post => <li key={post.id}>{post.title}</li>)
            }
        </div>
    );
};

export default DataFetching;