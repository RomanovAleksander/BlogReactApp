import {
  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS,
  FETCH_POST_FAILURE
} from './types';

const postRequested = () => {
  return {
    type: FETCH_POST_REQUEST
  }
};

const postLoaded = (newPost) => {
  return {
    type: FETCH_POST_SUCCESS,
    payload: newPost
  }
};

const postError = (error) => {
  return {
    type: FETCH_POST_FAILURE,
    payload: error
  }
};

export {
  postRequested,
  postLoaded,
  postError
};
