import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './header';
import '../styles/posts.css';
import { Link } from 'react-router-dom';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { addPost } from '../actions/posts';

class NewPost extends Component {
  state = {
    id: '',
    author: '',
    category: '',
    title: '',
    body: '',
    timestamp: Date.now(),
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

  handleAdd() {
    const postData = this.state;

    this.props.addPost(postData)
    return this.props.history.push("/");
  }

  render() {
    const { categories } = this.props;

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
                  onChange={(e) => {
                    if(e.target.value === 'Select'){
                      return alert('Select a category')
                    }
                    this.handleChange(e)
                  }}>
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
              <Button onClick={() => this.handleAdd()}>Add a Post</Button>
            </Form>
          </div>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories.categories
  }
};

export default connect(mapStateToProps, {addPost})(NewPost);