import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as api from '../helpers/api';
import { fetchCategories } from '../actions/'
import Header from './header';
import Posts from './posts';

class Main extends Component {
  render() {
    return (
      <div className='container'>
        <Header />
        <Posts />
      </div>
    )
  }
}

export default Main;
