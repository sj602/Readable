import {
  GET_CATEGORIES,
  GET_COMMENTS_BY_POST,
  GET_POSTS_BY_CATEGORY,
} from '../actions/types';

export default function categories(state = {}, action) {
  switch(action.type) {
    case GET_CATEGORIES:
      return {
        categories: action.categories
      }

    default:
      return state
  }
}
