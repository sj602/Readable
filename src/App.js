import React, { Component } from 'react';
import Main from './components/main';
import NewPost from './components/NewPost';
import PostDetail from './components/PostDetail';
import PostEdit from './components/PostEdit';
import * as api from './helpers/api';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Main} />
          <Route exact path='/new' component={NewPost} />
          <Route exact path='/edit/:id' component={PostEdit} />
          <Route exact path='/:category/' component={Main} />
          <Route exact path='/:category/:id' component={PostDetail} />

        </Switch>
      </div>
    );
  }
}
