import {
  GET_COMMENTS_BY_POST,
  GET_POSTS_BY_CATEGORY,
  GET_ALL_POSTS,
  GET_POST,
  ADD_POST,
} from '../actions/types';

export default function posts(state = {}, action) {
  switch(action.type) {
    case GET_ALL_POSTS:
      return {
        ...state,
        posts: action.posts
      }

    case ADD_POST:
      return {
        ...state,
        posts: state.posts.push(action.post)
      }

    default:
      return state
  }
}
