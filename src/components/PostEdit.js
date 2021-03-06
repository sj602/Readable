import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './header';
import Footer from './footer';
import { withRouter } from 'react-router';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import {
  editPost, getPost
} from '../actions/posts';

class PostEdit extends Component {
  state = {
    id: '',
    author: '',
    category: '',
    title: '',
    body: '',
    timestamp: '',
  }

  componentWillMount() {
    const { id } = this.props.match.params;
    this.props.getPost(id);
  }

  componentWillReceiveProps({post}) {
    this.setState({...post});
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
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
    const { post } = this.props;

    this.props.editPost(postData)
    return this.props.history.push(`/${post.category}/${post.id}`);
  }

  render() {
    const { categories } = this.props;

     return (
       <div className='container'>
          <div className='new-post'>
            <Header />
            <Form>
              { categories.length && (<FormGroup>
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
              </FormGroup>)}
              <FormGroup>
                <Label>Author</Label>
                <Input
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
          <Footer />
        </div>
    )
  }
}

const mapStateToProps = ({posts, categories}) => {
  return {
    categories,
    post: posts.selectPost
  }
};

export default withRouter(connect(mapStateToProps, {
  editPost, getPost
})(PostEdit));
