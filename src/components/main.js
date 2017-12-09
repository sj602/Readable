import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as api from '../helpers/api';
import { fetchCategories } from '../actions/'
import Header from './header';
import Posts from './posts';

class Main extends Component {
  // state = {
  //
  // }

  // componentDidMount() {
  //   // const categories = getAll();
  //   // console.log(categories);
  //   return api.getCategories();
  // }

  render() {
    return (
      <div>
        <Header />
        <Posts />
        this is main page
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
  }
};

export default connect(mapStateToProps, {fetchCategories})(Main);
