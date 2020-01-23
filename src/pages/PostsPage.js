import React from 'react';
import { withRouter } from 'react-router-dom';
import { PostList } from '../components/PostList';

const PostsPage = ({history}) => {
  return (
    <PostList onView={(bookId) => {
      history.push(`/books/${bookId}`);
    }} />
  );
};

export default withRouter(PostsPage);