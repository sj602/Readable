import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as api from '../helpers/api';

class Main extends Component {
  // state = {
  //
  // }

  // componentWillMount() {
  //   // const categories = getAll();
  //   // console.log(categories);
  //   return api.getCategories();
  // }

  render() {
    console.log(this.props.categories)
    return (
      <div>
        this is main page
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories
  }
};

export default connect(mapStateToProps)(Main);
