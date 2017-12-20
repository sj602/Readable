import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './header';
import Footer from './footer';
import CommentSub from './CommentSub';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import {
  Form, FormGroup, Label, Input, Button,
  Card, CardBody, CardTitle, CardSubtitle,
  CardText, CardFooter
} from 'reactstrap';
import {
  editPost, getPost
} from '../actions/posts';
import {
  editComment, deleteComment, getComment
} from '../actions/comments';

class CommentEdit extends Component {
  // state = {
  //   id: '',
  //   author: '',
  //   category: '',
  //   title: '',
  //   body: '',
  //   timestamp: '',
  // }
  //
  // componentWillReceiveProps({comment}) {
  //   this.setState({...comment});
  // }
  //
  componentWillMount() {
    const commentid = this.props.location.pathname.slice(15);
    this.props.getComment(commentid);

  }
  //
  // handleChange(e) {
  //   this.setState({ [e.target.name]: e.target.value })
  // }
  //
  // validate() {
  //   let msg = '';
  //   if(this.state.author === '') {
  //     msg = msg + 'Author is required.\n';
  //   }
  //   if(this.state.body === '') {
  //     msg = msg +'Body is required.\n';
  //   }
  //
  //   if(msg === '') {
  //     return ;
  //   }
  //   return alert(msg);
  // }
  //
  //
  // handleEdit() {
  //   this.validate();
  //
  //   const commentData = this.state;
  //   const { post, comment } = this.props;
  //
  //   this.props.editComment(commentData)
  //   return this.props.history.push(`/${post.category}/${post.id}`);
  // }
  //
  render() {
    const { post } = this.props;
    const { comments } = this.props;
    const commentid = this.props.location.pathname.slice(15);
    console.log(commentid)

     return (
       <div className='container'>
          <div className='edit-comment'>
            <Header />
            { post && (
              <Card>
                <CardBody>
                  <CardTitle>{post.title}</CardTitle>
                  <CardSubtitle>written by {post.author}</CardSubtitle>
                  <CardText style={{marginTop: '30px'}}>{post.body}</CardText>
                </CardBody>

                { comments && comments.map(comment => {

                    if(comment.id === commentid) {
                      return (
                        <div>
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
                            <Button onClick={() => this.handleAdd()}>Edit a Comment</Button>
                          </Form>

                          <CardFooter className='comments' key={comment.id}>
                            <div>
                              {comment.author}
                            </div>
                            <div style={{marginTop: '15px'}}>
                              {comment.body}
                            </div>
                            <div>
                              <CommentSub value={comment} />
                            </div>
                          </CardFooter>
                        </div>
                      )
                    }

                    return (
                      <CardFooter className='comments' key={comment.id}>
                        <div>
                          {comment.author}
                        </div>
                        <div style={{marginTop: '15px'}}>
                          {comment.body}
                        </div>
                        <div>
                          <CommentSub value={comment} />
                        </div>
                      </CardFooter>
                    )
                })
              }

              </Card>

            )}
          </div>
          <Footer />
        </div>
        )
      }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
    post: state.posts.selectPost,
    comments: state.comments
  }
}

export default withRouter(connect(mapStateToProps, {
  editPost, getPost, deleteComment, editComment, getComment
})(CommentEdit));
