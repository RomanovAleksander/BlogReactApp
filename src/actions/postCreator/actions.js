import {
  FORM_HAS_OPENED,
  FORM_HAS_CLOSED
} from './types';

const openForm = (post) => {
  return {
    type: FORM_HAS_OPENED,
    payload: post
  }
};

const closeFrom = () => {
  return {
    type: FORM_HAS_CLOSED
  }
};

export {
  openForm,
  closeFrom
};
