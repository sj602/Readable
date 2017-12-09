import React, { Component } from 'react';
import { connect } from 'react-redux';
import { voteDispatch } from '../actions/vote';
import FaThumbsOUp from 'react-icons/lib/fa/thumbs-o-up';
import FaThumbsODown from 'react-icons/lib/fa/thumbs-o-down';

class Vote extends Component {
  vote(id, option, type) {
    this.props.voteDispatch(id, option, type)
  }

  render() {
    const { value, vote } = this.props; // value : post or comment
    let score = (vote[value.id] === undefined) ? value.voteScore : vote[value.id];
    console.log('vote[value.id]: ', vote[value.id])
    console.log('vote: ', vote)

    return (
      <p>
        Vote Score: {score}
        <button onClick={() => this.vote(value.id, "upVote", 'post')}><FaThumbsOUp /></button>
        <button onClick={() => this.vote(value.id, "downVote", 'post')}><FaThumbsODown /></button>
      </p>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    vote: state.vote
  }
};

export default connect(mapStateToProps, {voteDispatch})(Vote);
