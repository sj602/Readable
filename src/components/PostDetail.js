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
  CardSubtitle, CardFooter,
  Form, FormGroup, Input,
  Label, Button,
} from 'reactstrap';

class PostDetail extends Component {
  state = {
    author: '',
    body: '',
  }

  componentWillMount() {
    const { id } = this.props.match.params;
    this.props.getPost(id);
    this.props.getCommentsByPost(id);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleAdd() {

  }

  render() {
    const { post } = this.props;
    const { comments } = this.props.comments;

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

            <Form>
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
    post: state.posts.selectPost,
    comments: state.comments
  }
};

export default connect(mapStateToProps, {
  getPost, getCommentsByPost
})(PostDetail);
