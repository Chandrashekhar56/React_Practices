import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './post_listing.css';
import PostItem from './postItem';
const PostsList = () => 
{
  const [posts, setPosts] = useState([]);
  useEffect(() =>
  {
      const fetchPosts = async () =>
      {
        try 
        {
          const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
          setPosts(response.data);
        } 
        catch (error) 
        { 
          console.error('Error fetching posts:', error);
        }
      };
    fetchPosts();
  }, []);

  return (
    <div className="posts-list">
      <h1>Posts Listing</h1>
      <ul>
        { posts.map(post => ( <PostItem post={post} /> ))}
      </ul>
    </div>
  );
};

export default PostsList;
