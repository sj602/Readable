import {
  GET_COMMENTS_BY_POST,
  ADD_COMMENT,
  DELETE_COMMENT,
  GET_COMMENT,
  EDIT_COMMENT,
} from '../actions/types';

export default function comments(state = {}, action) {
  switch(action.type) {
    case GET_COMMENTS_BY_POST:
      return {
        ...state,
        comments: action.comments
      }

    case GET_COMMENT:
      return {
        ...state,
        comment: action.comment
      }

    case ADD_COMMENT:
      return {
        ...state,
        comments: state.comments.concat(action.comment)
      }

    case DELETE_COMMENT:
      return {
        ...state,
        comments: state.comments.filter(c => c.id !== action.comment.id)
      }

    case EDIT_COMMENT:
      return {
        ...state,
        comment: action.comment
      }

    default:
      return state
  }
}
