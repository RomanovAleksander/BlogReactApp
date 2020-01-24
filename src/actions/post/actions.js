import {
  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS,
  FETCH_POST_FAILURE,
  FETCH_UPDATE_SUCCESS,
  FETCH_UPDATE_FAILURE
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

const updateSuccess = (newPost) => {
  return {
    type: FETCH_UPDATE_SUCCESS,
    payload: newPost
  }
};

const updateError = (error) => {
  return {
    type: FETCH_UPDATE_FAILURE,
    payload: error
  }
};

export {
  postRequested,
  postLoaded,
  postError,
  updateSuccess,
  updateError
};
