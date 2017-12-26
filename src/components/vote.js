import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/posts';
import { voteDispatch } from '../actions/vote';
import FaThumbsOUp from 'react-icons/lib/fa/thumbs-o-up';
import FaThumbsODown from 'react-icons/lib/fa/thumbs-o-down';
import { Button } from 'react-bootstrap';

class Vote extends Component {
  vote(id, option, type) {
    this.props.voteDispatch(id, option, type)
    this.props.fetchPosts()
  }

  render() {
    let { value, vote } = this.props; // value : post or comment
    let score = (vote[value.id] === undefined) ? value.voteScore : vote[value.id];

    let type
    if(value.hasOwnProperty('parentId')) {
      type = 'comment';
    }else {
      type = 'post';
    }

    return (
      <div>
        Vote Score: {score} {'  '}
        <Button onClick={() => this.vote(value.id, "upVote", type)}><FaThumbsOUp /></Button>{' '}
        <Button onClick={() => this.vote(value.id, "downVote", type)}><FaThumbsODown /></Button>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    vote: state.vote,
    posts: state.posts
  }
};

export default connect(mapStateToProps, {voteDispatch, fetchPosts})(Vote);
