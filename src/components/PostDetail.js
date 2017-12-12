import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './header';
import Vote from './vote';
import { getPost } from '../actions/posts';
import { getCommentsByPost } from '../actions/comments';
import '../styles/posts.css';
import { Link } from 'react-router-dom';
import {
  Card, CardBody,
  CardText, CardTitle,
  CardSubtitle, CardFooter
} from 'reactstrap';

class PostDetail extends Component {
  componentWillMount() {
    const { id } = this.props.match.params;
    this.props.getPost(id);
    this.props.getCommentsByPost(id);
  }

  render() {
    const { selectPost } = this.props.posts;
    const { comments } = this.props.comments;

    return (
      <div className='container'>
        <Header />
        { selectPost && (
          <Card>
            <CardBody>
              <CardTitle>{selectPost.title}</CardTitle>
              <CardSubtitle>written by {selectPost.author}</CardSubtitle>
              <CardText style={{marginTop: '30px'}}>{selectPost.body}</CardText>
            </CardBody>
            { comments && comments.map(comment => {
                return (
                  <CardFooter className='comments' key={comment.id}>
                    <div>
                      {comment.author}
                    </div>
                    <div>
                      {comment.body}
                    </div>
                    <div>
                      <Vote value={comment} />
                    </div>
                  </CardFooter>
                )
            })
          }
          </Card>

        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    comments: state.comments
  }
};

export default connect(mapStateToProps, {
  getPost, getCommentsByPost
})(PostDetail);
