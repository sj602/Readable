import {
  VOTE
} from './types';
import * as api from '../helpers/api';

export const voteAction = (id, score) => {
  return {
    type: VOTE,
    id,
    score,
  }
}

export const vote = (id, option, type) => (dispatch) => {
  return api.vote(id, option, type)
    .then(data => dispatch(vote(id, data.voteScore)))
}
