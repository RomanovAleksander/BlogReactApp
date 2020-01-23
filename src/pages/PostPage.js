import React from 'react';
import { Post } from '../components/Post';

export const PostPage = ({ postId }) => {
  return (
    <Post postId={postId}/>
  );
};
