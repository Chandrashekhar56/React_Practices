import React from "react";

const PostItem=({post})=>{
        return(
            <li>
            <p>UserId: {post.userId}</p>
            <p>Id: {post.id}</p>
            <h3>Title: {post.title}</h3>
            <p>Body: {post.body}</p>
          </li>
        );
};

export default PostItem;