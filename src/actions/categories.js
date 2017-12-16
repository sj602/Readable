import {
  GET_CATEGORIES,
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
