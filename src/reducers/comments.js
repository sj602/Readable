import {
  GET_CATEGORIES,
  GET_COMMENTS_BY_POST,
  GET_POSTS_BY_CATEGORY,
} from '../actions/types';

export default function comments(state = {}, action) {
  switch(action.type) {
    case GET_COMMENTS_BY_POST:
      return {
        ...state,
        comments: action.comments
      }
      
    default:
      return state
  }
}
