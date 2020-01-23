import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE
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

export {
  postsRequested,
  postsLoaded,
  postsError
};
