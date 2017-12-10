import {
  GET_CATEGORIES,
  GET_COMMENTS_BY_POST,
  GET_POSTS_BY_CATEGORY,
  GET_POST,
} from '../actions/types';

export default function posts(state = {}, action) {
  switch(action.type) {
    case GET_POST:
      return {
        ...state,
        post: action.post
      }

    default:
      return state
  }
}
