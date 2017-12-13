import {
  GET_COMMENTS_BY_POST,
  ADD_COMMENT,
} from '../actions/types';

export default function comments(state = [], action) {
  switch(action.type) {
    case GET_COMMENTS_BY_POST:
      return {
        ...state,
        comments: action.comments
      }

    case ADD_COMMENT:
      return {
        ...state,
        comments: state.comments.push(action.comment)
      }

    default:
      return state
  }
}
