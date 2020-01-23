import { combineReducers } from 'redux';
import { posts } from './posts';
import { post } from './post';

export const reducer = combineReducers({
  posts,
  post
});
