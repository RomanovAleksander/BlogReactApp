import React from 'react';
import { withRouter } from 'react-router-dom';
import { PostList } from '../components/PostList';

const PostsPage = ({history}) => {
  return (
    <PostList onView={(postId) => {
      history.push(`/posts/${postId}`);
    }}/>

  );
};

export default withRouter(PostsPage);