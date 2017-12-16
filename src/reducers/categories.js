import {
  GET_CATEGORIES,
} from '../actions/types';

export default function categories(state = {}, action) {
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
