import {
  GET_COMMENTS_BY_POST,
  GET_POSTS_BY_CATEGORY,
  GET_ALL_POSTS,
  GET_POST,
  ADD_POST,
  EDIT_POST,
  DELETE_POST,
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

    case GET_POST:
      // console.log(action.post)
      return {
        ...state,
        selectPost: action.post
      }

    case EDIT_POST:
      const index = state.posts.indexOf(action.post);

      return {
        ...state,
        posts: Object.assign(state.posts[index], action.post)
      }

    case DELETE_POST:
      const i = state.posts.indexOf(action.post);

      return {
        ...state,
        posts: state.posts.splice(i, 1)
      }

    default:
      return state
  }
}
