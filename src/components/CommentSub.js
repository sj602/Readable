import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter,} from 'react-router';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import {
  deleteComment, editComment
} from '../actions/comments';
import { getPost } from '../actions/posts';
import Vote from './vote';
import '../styles/CommentSub.css';

class CommentSub extends Component {
  render() {
    const { comment } = this.props;
    return (
      <div className='comment-control'>
        <Vote value={comment} />
        <div>
          <Link to={`/edit/comments/${comment.id}`}>
            <Button>Edit</Button>
          </Link>{'  '}
            <Button onClick={() => {
              console.log(comment)
              this.props.deleteComment(comment)
              .then(() => this.props.getPost(comment.parentId))
            }}>Delete</Button>{'  '}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    comments: state.comments,
  }
}

export default withRouter(connect(mapStateToProps, {
  deleteComment, editComment, getPost
})(CommentSub));
