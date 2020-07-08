import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const DataFetching2 = () => {
    const [posts, setPosts] = useState({});
    const [postID, setPostID] = useState(1);
    const [idFromBtnClick, setIDfromBtnClick] = useState(1)
    useEffect(() => {
        Axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromBtnClick}`)
            .then(res => {
                console.log(res.data)
                setPosts(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [idFromBtnClick])
    const handleFetchPost = () => {
        setIDfromBtnClick(postID)
    }
    return (
        <div>
            <input type="text" value={postID} onChange={e => setPostID(e.target.value)} />
            <button onClick={handleFetchPost}>Fetch Post</button>
            <p>{posts.title}</p>
        </div>
    );
};

export default DataFetching2;