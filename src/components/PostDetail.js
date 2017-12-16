import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './header';
import CommentSub from './CommentSub';
import { getPost } from '../actions/posts';
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

class PostDetail extends Component {
  state = {
    author: '',
    body: '',
    parentId: this.props.match.params.id,
    id: uuid(),
    timestamp: Date.now(),
  }

  componentWillMount() {
    const { id } = this.props.match.params;
    console.log('id: ', id)
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
    console.log(comment)
    this.props.addComment(comment);
  }

  render() {
    const { post } = this.props;
    const { comments } = this.props.comments;
    console.log('comments: ', comments)

    return (
      <div className='container'>
        <Header />

        { post && (
          <Card>
            <CardBody>
              <CardTitle>{post.title}</CardTitle>
              <CardSubtitle>written by {post.author}</CardSubtitle>
              <CardText style={{marginTop: '30px'}}>{post.body}</CardText>
            </CardBody>
            <Form className='write-comment'>
              <FormGroup>
                <Label>Author</Label>
                <Input
                type="text" name="author" value={this.state.author}
                onChange={(e) => this.handleChange(e)} required/>
              </FormGroup>
              <FormGroup>
                <Label>Comment</Label>
                <Input type="textarea" name="body"
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
                    <div style={{marginTop: '15px'}}>
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

        )}
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
  getPost, getCommentsByPost, addComment,
})(PostDetail);
