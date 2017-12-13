import {
  GET_COMMENTS_BY_POST,
  ADD_COMMENT,
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
