import {
  FORM_HAS_OPENED,
  FORM_HAS_CLOSED,
} from '../actions/postForm/types';

const initialState = {
  post: {},
  isOpen: false
};

export const postForm = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FORM_HAS_OPENED:
      return {
        post: payload,
        isOpen: true
      };
    case FORM_HAS_CLOSED:
      return {
        ...initialState
      };

    default:
      return state;
  }
};
