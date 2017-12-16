import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as api from '../helpers/api';
import { fetchCategories } from '../actions/'
import Header from './header';
import Posts from './posts';

class Main extends Component {
  render() {
    const category = this.props.location.pathname.slice(1)
    
    return (
      <div className='container'>
        <Header />
        <Posts category={category}/>
      </div>
    )
  }
}

export default Main;
