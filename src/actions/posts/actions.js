import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  FETCH_CREATE_POST_SUCCESS,
  FETCH_CREATE_POST_FAILURE
} from './types';

const postsRequested = () => {
  return {
    type: FETCH_POSTS_REQUEST
  }
};

const postsLoaded = (newPosts) => {
  return {
    type: FETCH_POSTS_SUCCESS,
    payload: newPosts
  }
};

const postsError = (error) => {
  return {
    type: FETCH_POSTS_FAILURE,
    payload: error
  }
};

const createPostSuccess = (createdPost) => {
  return {
    type: FETCH_CREATE_POST_SUCCESS,
    payload: createdPost
  }
};

const createPostError = (error) => {
  return {
    type: FETCH_CREATE_POST_FAILURE,
    payload: error
  }
};

export {
  postsRequested,
  postsLoaded,
  postsError,
  createPostSuccess,
  createPostError
};
