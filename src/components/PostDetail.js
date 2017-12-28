import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './header';
import Footer from './footer';
import Vote from './vote';
import CommentSub from './CommentSub';
import { Link } from 'react-router-dom';
import {
  getPost, deletePost
} from '../actions/posts';
import {
  getCommentsByPost, addComment
} from '../actions/comments';
import '../styles/posts.css';
import {
  Card, CardBody,
  CardText, CardTitle,
  CardSubtitle, CardFooter,
  Form, FormGroup, Input,
  Label, Button,
} from 'reactstrap';
import uuid from 'uuid';
import '../styles/PostDetail.css';

class PostDetail extends Component {
  state = {
    author: '',
    body: '',
    parentId: this.props.match.params.id,
  }

  componentWillMount() {
    const { id } = this.props.match.params;
    this.props.getPost(id);
    this.props.getCommentsByPost(id);
  }

  validate() {
    let msg = '';
    if(this.state.author === '') {
      msg = msg + 'Author is required.\n';
    }
    if(this.state.body === '') {
      msg = msg +'Body is required.\n';
    }

    if(msg === '') {
      return ;
    }
    return alert(msg);
  }


  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleAdd() {
    if(this.state.author === '' || this.state.body === '') {
      return this.validate()
    }

    const comment = this.state;
    comment.id = uuid();
    comment.timestamp = Date.now();
    this.props.addComment(comment);

    this.inputAuthor.value = '';
    this.inputBody.value = '';
    this.setState({ author: '', body: '' });

    const { id } = this.props.match.params;
    return this.props.getPost(id);

  }

  render() {
    const { post } = this.props;
    const { comments } = this.props.comments;

    return (
      <div className='container'>
        <Header />

        { post && post.title ? (
          <Card>
            <CardBody>
              <CardTitle>{post.title}</CardTitle>
              <CardSubtitle>written by {post.author}</CardSubtitle>
              <CardText style={{marginTop: '30px', marginLeft: '15px'}}>{post.body}</CardText>
            </CardBody>
            <div className='sub-content'>
              <h6>Comments: {post.commentCount} <Vote value={post} /></h6>
              <div className='edit-delete'>
                <Link to={`/edit/${post.id}`}>
                  <Button>Edit</Button>
                </Link>{'  '}
                  <Button onClick={() => {
                      this.props.deletePost(post)
                      return this.props.history.push('/');
                      }}
                  >
                    Delete
                  </Button>{'  '}
              </div>
            </div>
            <Form className='write-comment'>
              <FormGroup>
                <Label>Author</Label>
                <Input
                ref={(node) => this.inputAuthor = node}
                type="text" name="author" value={this.state.author}
                onChange={(e) => this.handleChange(e)} required/>
              </FormGroup>
              <FormGroup>
                <Label>Comment</Label>
                <Input
                ref={(node) => this.inputBody = node}
                type="textarea" name="body"
                style={{height: '80px'}} value={this.state.body}
                onChange={(e) => this.handleChange(e)} required/>
              </FormGroup>
              <Button onClick={() => this.handleAdd()}>Add a Comment</Button>
            </Form>

            { comments && comments.map(comment => {
                return (
                  <CardFooter className='comments' key={comment.id}>
                    <div>
                      {comment.author}
                    </div>
                    <div style={{margin: '15px'}}>
                      {comment.body}
                    </div>
                    <div>
                      <CommentSub comment={comment} />
                    </div>
                  </CardFooter>
                )
            })
          }
          </Card>

        ) : (
          <Card>
            <CardBody>
              <CardTitle>
                This post is deleted.
              </CardTitle>
            </CardBody>
          </Card>
        )
      }
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    post: state.posts.selectPost,
    comments: state.comments
  }
};

export default connect(mapStateToProps, {
  getPost, getCommentsByPost, deletePost, addComment,
})(PostDetail);
