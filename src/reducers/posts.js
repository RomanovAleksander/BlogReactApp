import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  FETCH_CREATE_POST_SUCCESS,
  FETCH_CREATE_POST_FAILURE
} from '../actions/posts/types';

const initialState = {
  posts: [],
  loading: true,
  error: null
};

export const posts = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_POSTS_REQUEST:
      return {
        ...state,
        posts: [],
        loading: true,
        error: null
      };
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        posts: payload,
        loading: false,
        error: null
      };
    case FETCH_POSTS_FAILURE:
      return {
        ...state,
        posts: [],
        loading: false,
        error: payload
      };
    case FETCH_CREATE_POST_SUCCESS:
      return {
        ...state,
        posts: [
          ...state.posts,
          payload
        ]
      };
    case FETCH_CREATE_POST_FAILURE:
      return state;

    default:
      return state;
  }
};
