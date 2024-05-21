import React from 'react';
import {UserApiservice} from "../services/getusers.api.services";

const PostPage = () => {
    UserApiservice.getAllPosts().then(value => console.log(value.data))
    return (
        <div>
            Hi Im Post
        </div>
    );
};

export default PostPage;