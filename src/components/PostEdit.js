import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './header';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import {
  editPost, getPost
} from '../actions/posts';

class PostEdit extends Component {
  state = {
    // id: post.id,
    // author: post.author,
    // category: post.category,
    // title: post.title,
    // body: post.body,
    // timestamp: post.timestamp,
    id: '',
    author: '',
    category: '',
    title: '',
    body: '',
    timestamp: '',
  }

  componentWillMount() {
    // const { pathname } = this.props.location
    // const id = pathname.slice(6, pathname.length);
    const { id } = this.props.match.params;
    this.props.getPost(id);
    console.log(this.props)

  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
      // id: event.target.value,
      // author: event.target.value,
      // category: event.target.value,
      // title: event.target.value,
      // body: event.target.value,
      // timestamp: Date.now()
    // })

  }

  validate() {
    let msg = '';
    if(this.state.author === '') {
      msg = msg + 'Author is required.\n';
    }
    if(this.state.title === '') {
      msg = msg +'Title is required.\n';
    }
    if(this.state.body === '') {
      msg = msg +'Body is required.\n';
    }
    if(this.state.category === '') {
      msg = msg +'Category is required.\n'
    }

    if(msg === '') {
      return ;
    }
    return alert(msg);
  }


  handleEdit() {
    this.validate();

    const postData = this.state;

    this.props.editPost(postData)
    return this.props.history.push("/");
  }

  render() {
    const { post } = this.props;
    const { categories } = this.props;

    if(post) {
     return (
       <div className='container'>
          <div className='new-post'>
            <Header />
            <Form>
              <FormGroup>
                <Label>Select Category</Label>
                <Input
                  type="select" name="category"
                  value={this.state.category}
                  onChange={(e) => this.handleChange(e)}>
                  <option defaultValue>
                    Select
                  </option>
                { categories.map(category => {
                  return (
                    <option key={category.name} value={category.name}>
                      {category.name}
                    </option>
                  )
                })}
                </Input>
              </FormGroup>
              <FormGroup>
                <Label>Author</Label>
                <Input
                  defaultValue={post.author}
                  type="text" name="author" value={this.state.author}
                  onChange={(e) => this.handleChange(e)} required/>
              </FormGroup>
              <FormGroup>
                <Label>Post Title</Label>
                <Input
                  type="text" name="title" value={this.state.title}
                  onChange={(e) => this.handleChange(e)} required/>
              </FormGroup>
              <FormGroup>
                <Label>Post Content</Label>
                <Input type="textarea" name="body"
                  style={{height: '200px'}} value={this.state.body}
                  onChange={(e) => this.handleChange(e)} required/>
              </FormGroup>
              <Button onClick={() => this.handleEdit()}>Edit a Post</Button>
            </Form>
          </div>
        </div>
    )
  }
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories.categories,
    post: state.posts.post
  }
};

export default withRouter(connect(mapStateToProps, {
  editPost, getPost
})(PostEdit));
