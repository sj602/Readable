import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  fetchPosts, deletePost, editPost
} from '../actions/posts';
import '../styles/posts.css';
import { Link } from 'react-router-dom';
import PostSub from './PostSub';
import { Button, ListGroup, ListGroupItem } from 'reactstrap';

class Posts extends Component {
  state = {
    posts: [],
    sort: false,
  }

  componentDidMount() {
    this.props.fetchPosts()
      .then(data => data.posts)
      .then(data => {
        this.setState({ posts: data })
      })
  }

  renderPosts() {
    const { posts } = this.state;
    const { category } = this.props;

    if(posts === []) {
      return (
          <p>There are no posts yet.</p>
      )
    }

    if(posts) {
      if(category) {
          return posts.filter(post => post.category === category)
            .map((post) => {
              return (
                <ListGroupItem key={post.id}>
                  <Link to={`/${post.category}/${post.id}`} params={{ id: post.id }}>
                    <h3>{post.title}</h3>
                  </Link>
                  <h5> by {post.author}</h5>
                  <PostSub post={post} />
                </ListGroupItem>
              )
          })
        }

      return posts.map((post) => {
        return (
          <ListGroupItem key={post.id}>
            <Link to={`/${post.category}/${post.id}`} params={{ id: post.id }}>
              <h3>{post.title}</h3>
            </Link>
            <h5> by {post.author}</h5>
            <PostSub post={post} />
          </ListGroupItem>
        )
      })
    }
  }

  sortPosts(type) {
    const { posts } = this.props.posts;
    const { sort } = this.state;
    
    switch(type){
      case 'time':
        return this.setState({
          posts: posts.sort((a, b) => {

            if(sort === false) {
              return a.timestamp > b.timestamp;
            }else {
              return a.timestamp < b.timestamp;
            }

          }),

          sort: !sort
        })

      case 'score':
        return this.setState({
          posts: posts.sort((a, b) => {

            if(sort === false) {
              return a.voteScore < b.voteScore;
            }else {
              return a.voteScore > b.voteScore;
            }

          }),

          sort: !sort
        })


      default:
        return ;
    }
  }

  render() {
     return (
      <div className='posts'>
        <div className='control-buttons'>
          <Button onClick={() => this.sortPosts('time')}>Sort by Time</Button>{' '}
          <Button onClick={() => this.sortPosts('score')}>Sort by Score</Button>{' '}
          <Link to='/new'>
            <Button>Create a Post</Button>
          </Link>
        </div>

        <ListGroup>
          { this.renderPosts() }
        </ListGroup>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
};

export default connect(mapStateToProps, {
  fetchPosts, deletePost, editPost
})(Posts);
