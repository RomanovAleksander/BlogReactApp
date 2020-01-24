import {
  COMMENT_SUCCESS
} from './types';

const commentSuccess = (comment) => {
  return {
    type: COMMENT_SUCCESS,
    payload: comment
  }
};

export {
  commentSuccess
};
