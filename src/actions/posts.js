import {
  GET_COMMENTS_BY_POST,
  GET_ALL_POSTS,
  GET_POSTS_BY_CATEGORY,
  ADD_POST,
  GET_POST,
  EDIT_POST,
  DELETE_POST,
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

export const editPostAction = (post) => {
  return {
    type: EDIT_POST,
    post
  }
}

export const editPost = (post) => (dispatch) => {
  return api.editPost(post.id)
    .then(post => dispatch(editPostAction(post)))
}

export const deletePostAction = (post) => {
  return {
    type: DELETE_POST,
    post
  }
}

export const deletePost = (post) => (dispatch) => {
  return api.deletePost(post.id)
    .then(post => dispatch(deletePostAction(post)))
}
