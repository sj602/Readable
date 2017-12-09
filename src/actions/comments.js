import {
  GET_CATEGORIES,
  GET_POSTS_BY_CATEGORY,
  GET_COMMENTS_BY_POST
} from './types';
import * as api from '../helpers/api';

export default function getCommentsByPost(comments, post) {
  return {
    type: GET_COMMENTS_BY_POST,
    comments,
    post,
  }
}
