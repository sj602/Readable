import React, { Component } from 'react';
import { connect } from 'react-redux';
import { voteDispatch } from '../actions/vote';
import FaThumbsOUp from 'react-icons/lib/fa/thumbs-o-up';
import FaThumbsODown from 'react-icons/lib/fa/thumbs-o-down';
import { Button } from 'react-bootstrap';

class Vote extends Component {
  vote(id, option, type) {
    this.props.voteDispatch(id, option, type)
  }

  render() {
    const { value, vote } = this.props; // value : post or comment
    let score = (vote[value.id] === undefined) ? value.voteScore : vote[value.id];

    return (
      <p>
        Vote Score: {score}
        <Button onClick={() => this.vote(value.id, "upVote", value)}><FaThumbsOUp /></Button>
        <Button onClick={() => this.vote(value.id, "downVote", value)}><FaThumbsODown /></Button>
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
