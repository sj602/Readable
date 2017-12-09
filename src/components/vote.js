import React, { Component } from 'react';
import { connect } from 'react-redux';
import { vote } from '../actions/vote';
import FaThumbsOUp from 'react-icons/lib/fa/thumbs-o-up';
import FaThumbsODown from 'react-icons/lib/fa/thumbs-o-down';

class Vote extends Component {
  vote(id, option, type) {
    console.log('vote')
    this.props.vote(id, option, type)
  }

  render() {
    const { post } = this.props;

    return (
      <p>
        Vote Score: {post.voteScore}
        <button onClick={() => this.vote({post.id}, 'upVote', 'post')}><FaThumbsOUp /></button>
        <button onClick={() => this.vote({post.id}, 'downVote', 'post')}><FaThumbsODown /></button>
      </p>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    vote: state.vote
  }
};

export default connect(mapStateToProps, {vote})(Vote);
