import {
  GET_COMMENTS_BY_POST,
  GET_ALL_POSTS,
  GET_POSTS_BY_CATEGORY,
  ADD_POST,
  GET_POST
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

export const addPostAction = (post) => {
  return {
    type: ADD_POST,
    post,
  }
}

export const addPost = (postData) => (dispatch) => {
  return api.addPost(postData)
    .then(postData => dispatch(addPostAction(postData)))
}

export const getPostAction = (post) => {
  return {
    type: GET_POST,
    post
  }
}

export const getPost = (id) => (dispatch) => {
  return api.getPost(id)
    .then(post => dispatch(getPostAction(post)))
}
