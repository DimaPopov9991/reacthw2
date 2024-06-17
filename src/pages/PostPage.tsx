import React, {useEffect, useState} from 'react';
import {UserApiservice} from "../services/getusers.api.services";
import {IPostsProps} from "../models/IPostsProps";

const PostPage = () => {
    const [Post, setPost] = useState<IPostsProps[]>([])
    useEffect(() => {
        UserApiservice.getAllPosts().then(value => setPost(value.data))

    }, []);

    return (
        <div>
            {Post.map(value => <ul key={value.id}>
                <li> User ID:{value.userId}</li>
                <li> Title:{value.title}</li>
                <li> Body:{value.body}</li>

            </ul>)}
        </div>
    );
};

export default PostPage;