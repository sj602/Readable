import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter,} from 'react-router';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import {
  deletePost, editPost, fetchPosts
} from '../actions/posts';
import Vote from './vote';
import '../styles/PostSub.css';

class PostSub extends Component {
  render() {
    const post = this.props.post;

    return (
      <div className='sub-content'>
        <h6>Comments: {post.commentCount} <Vote value={post} /></h6>
        <div className='edit-delete'>
          <Link to={`/edit/${post.id}`}>
            <Button>Edit</Button>
          </Link>{'  '}
            <Button onClick={() => {
                this.props.deletePost(post);
                return this.props.history.push("/");
            }}
            >
              Delete
            </Button>{'  '}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  }
}

export default withRouter(connect(mapStateToProps, {
  deletePost, editPost, fetchPosts,
})(PostSub));
