import { combineReducers } from 'redux';
import { posts } from './posts';
import { post } from './post';
import { postForm } from './postForm';

export const reducer = combineReducers({
  posts,
  post,
  postForm
});
