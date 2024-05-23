import React, { Component } from 'react';
import axios from 'axios';
import './post_listing.css';
import PostItem from './postItem';
class PostsList extends Component
{
  constructor(props) 
  {
    super(props);
    this.state = { posts: [], };
  }

  componentDidMount() 
  {
    this.fetchPosts();
  }

  fetchPosts = async () => 
  {
    try 
    {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      this.setState({ posts: response.data });
    } 
    catch (error) 
    {
      console.error('Error fetching posts:', error);
    }
  };

  render() 
  {
    const { posts } = this.state;
    return (
        <div className="posts-list">
          <h1>Posts Listing</h1>
          <ul>
            { posts.map(item => ( <PostItem post={item} /> ))}
          </ul>
        </div>
      );
  }
}
export default PostsList;
