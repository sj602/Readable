import {
  GET_CATEGORIES,
  GET_POSTS_BY_CATEGORY,
  GET_COMMENTS_BY_POST
} from './types';
import * as api from '../helpers/api';

export default function getCommentsByPostAction(comments) {
  return {
    type: GET_COMMENTS_BY_POST,
    comments,
  }
};

export const getCommentsByPost = (id) => (dispatch) => {
  return api.getCommentsByPost(id)
    .then(comments => dispatch(getCommentsByPostAction(comments)))
};
