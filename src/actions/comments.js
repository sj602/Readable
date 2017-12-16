import {
  GET_COMMENTS_BY_POST,
  ADD_COMMENT,
  DELETE_COMMENT,
  EDIT_COMMENT,
  GET_COMMENT,
} from './types';
import * as api from '../helpers/api';

export const getCommentsByPostAction = (comments) => {
  return {
    type: GET_COMMENTS_BY_POST,
    comments,
  }
};

export const getCommentsByPost = (id) => (dispatch) => {
  return api.getCommentsByPost(id)
    .then(comments => dispatch(getCommentsByPostAction(comments)))
};

export const addCommentAction = (comment) => {
  return {
    type: ADD_COMMENT,
    comment
  }
}

export const addComment = (comment) => dispatch => {
  return api.addComment(comment)
    .then(comment => dispatch(addCommentAction(comment)))
}

export const deleteCommentAction = (comment) => {
  return {
    type: ADD_COMMENT,
    comment
  }
}

export const deleteComment = (comment) => dispatch => {
  return api.deleteComment(comment)
    .then(comment => dispatch(deleteCommentAction(comment)))
}

export const editCommentAction = (comment) => {
  return {
    type: ADD_COMMENT,
    comment
  }
}

export const editComment = (comment) => dispatch => {
  return api.editComment(comment)
    .then(comment => dispatch(editCommentAction(comment)))
}

export const getCommentAction = (comment) => {
  return {
    type: ADD_COMMENT,
    comment
  }
}

export const getComment = (id) => dispatch => {
  return api.getComment(id)
    .then(comment => dispatch(editCommentAction(comment)))
}
