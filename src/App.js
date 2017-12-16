import React, { Component } from 'react';
import Main from './components/main';
import NewPost from './components/NewPost';
import PostDetail from './components/PostDetail';
import PostEdit from './components/PostEdit';
import CommentEdit from './components/CommentEdit';
import { Route, Switch } from 'react-router-dom';

export default class App extends Component {
  constructor(props) {
    super(props);
    document.title = this.props.title;
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Main} />
          <Route exact path='/new' component={NewPost} />
          <Route exact path='/edit/:id' component={PostEdit} />
          <Route exact path='/edit/comments/:id' component={CommentEdit} />
          <Route exact path='/:category/' component={Main} />
          <Route exact path='/:category/:id' component={PostDetail} />

        </Switch>
      </div>
    );
  }
}
