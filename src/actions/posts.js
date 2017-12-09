import {
  GET_COMMENTS_BY_POST,
  GET_ALL_POSTS,
  GET_POSTS_BY_CATEGORY,
} from './types';
import * as api from '../helpers/api';

export const getPostsByCategory = (posts, category) => {
  return {
    type: GET_POSTS_BY_CATEGORY,
    posts,
    category
  }
}

export const getAllPosts = (posts) => {
  return {
    type: GET_ALL_POSTS,
    posts,
  }
}

export const fetchPosts = () => (dispatch) => {
  return api.getAllPosts()
    .then((posts) => dispatch(getAllPosts(posts)))
};
