import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './header';
import { fetchPosts } from '../actions/posts';
import '../styles/posts.css';
import { Link } from 'react-router-dom';

class PostDetail extends Component {
  render() {
     return (
      <div className='post-detail'>
        <Header />
      </div>
    )
  }
}

export default PostDetail;
