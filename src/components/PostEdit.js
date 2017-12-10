import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/posts.css';
import Header from './header';
import { Link } from 'react-router-dom';

class PostEdit extends Component {
  render() {
     return (
      <div className='post-edit'>
        <Header />
      </div>
    )
  }
}

export default PostEdit;
