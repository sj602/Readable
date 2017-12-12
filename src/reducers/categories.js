import {
  GET_CATEGORIES,
  GET_COMMENTS_BY_POST,
  GET_POSTS_BY_CATEGORY,
} from '../actions/types';

export default function categories(state = [], action) {
  const { categories } = action;
  switch(action.type) {
    case GET_CATEGORIES:
      return {
        ...categories
      }

    default:
      return state
  }
}
