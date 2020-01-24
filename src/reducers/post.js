import {
  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS,
  FETCH_POST_FAILURE
} from '../actions/post/types';
import {
  COMMENT_SUCCESS
} from '../actions/comments/types';

const initialState = {
  post: {},
  loading: true,
  error: null
};

export const post = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_POST_REQUEST:
      return {
        ...state,
        post: {},
        loading: true,
        error: null
      };
    case FETCH_POST_SUCCESS:
      return {
        ...state,
        post: payload,
        loading: false,
        error: null
      };
    case FETCH_POST_FAILURE:
      return {
        ...state,
        post: {},
        loading: false,
        error: payload
      };
    case COMMENT_SUCCESS:
      return {
        ...state,
        post: {
          ...state.post,
          comments: [
            ...state.post.comments,
            payload
          ]
        },
        loading: false,
        error: null
      };

    default:
      return state;
  }
};
