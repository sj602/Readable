import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './header';
import '../styles/posts.css';
import { Link } from 'react-router-dom';

class NewPost extends Component {
  render() {
     return (
       <div className='container'>
          <div className='new-post'>
            <Header />
            <div>
              <select>
                <option value='' className='disabled'>Select Category</option>

              </select>
            </div>
          </div>
        </div>
    )
  }
}

export default NewPost;
