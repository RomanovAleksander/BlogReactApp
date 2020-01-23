import React from 'react';
import { withRouter } from 'react-router-dom';
import { PostList } from '../components/PostList';
import { PostCreator } from '../components/PostCreator';

const PostsPage = ({history}) => {
  return (
    <>
      <PostCreator />
      <PostList onView={(postId) => {
        history.push(`/posts/${postId}`);
      }}/>
    </>
  );
};

export default withRouter(PostsPage);