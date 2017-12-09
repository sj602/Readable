import {
  GET_CATEGORIES,
  GET_POSTS_BY_CATEGORY,
  GET_COMMENTS_BY_POST
} from './types';
import * as api from '../helpers/api';

export const getCategories = (categories) => {
  return {
    type: GET_CATEGORIES,
    categories
  }
};

export const fetchCategories = () => (dispatch) => {
  return api.getCategories()
    .then((categories) => dispatch(getCategories(categories)))
};
