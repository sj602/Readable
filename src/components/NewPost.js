import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './header';
import '../styles/posts.css';
import { Link } from 'react-router-dom';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { addPost } from '../actions/posts';
import uuid from 'uuid';

class NewPost extends Component {
  state = {
    id: uuid(),
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

  // validate() {
  //   let msg = {};
  //   if(this.state.author === '') {
  //     msg.concat({'author required.'})
  //   }
  //   if(this.state.title === '') {
  //     msg.concat({'title required.'})
  //   }
  //   if(this.state.body === '') {
  //     msg.concat({'body required.'})
  //   }
  //   if(this.state.category === '') {
  //     msg.concat({'category required.'})
  //   }
  //
  //   if(msg === {}) {
  //     return ;
  //   }
  //   return alert(msg);
  // }

  handleAdd() {
    // this.validate();
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
