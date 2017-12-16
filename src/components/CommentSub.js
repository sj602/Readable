import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter,} from 'react-router';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import { deleteComment, editComment } from '../actions/comments';
import Vote from './vote';

class CommentSub extends Component {
  render() {
    const { comment } = this.props;

    return (
      <div className='sub-content'>
        <Vote value={comment} />
        <div>
          <div>
          <Link to={`/edit/comments/${comment.id}`} commentId={comment.id}>
            <Button>Edit</Button>
          </Link>
          </div>{'  '}
          <div>
            <Button onClick={() => this.props.deleteComment(comment)}>Delete</Button>
          </div>{'  '}
          <div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    comments: state.comments
  }
}

export default withRouter(connect(mapStateToProps, { deleteComment, editComment })(CommentSub));