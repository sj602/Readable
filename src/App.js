import React, { Component } from 'react';
import Main from './components/main';
import * as api from './helpers/api';
import getCategories from './actions/';
import { connect } from 'react-redux';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Main />
      </div>
    );
  }
}
