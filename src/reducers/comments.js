import {
  GET_COMMENTS_BY_POST,
  ADD_COMMENT,
  DELETE_COMMENT,
  GET_COMMENT,
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
      console.log('state', state)
      console.log('action.comment', action.comment)
      return {
        ...state,
        comments: state.comments.push(action.comment)
      }

    case DELETE_COMMENT:
      const i = state.comments.indexOf(action.comment);

      return {
        ...state,
        comments: state.comments.splice(i, 1)
      }

    default:
      return state
  }
}
