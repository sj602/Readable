import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/posts';
import '../styles/posts.css';
import { Link } from 'react-router-dom';

class Posts extends Component {
  state = {
    posts: [],
  }

  componentWillMount() {
    this.props.fetchPosts()
      .then(data => data.posts)
      .then(data => {
        this.setState({ posts: data })
      })
  }

  renderPosts() {
    const { posts } = this.state
    if(posts === []) {
      return (
          <p>There are no posts yet.</p>
      )
    }

    if(posts) {
      return posts.map((post) => {
        return (
          <Link to='/'>
            <li key={post.id}>{post.title} by {post.author}</li>
          </Link>
        )
      })
    }
  }

  render() {
     return (
      <div className='posts'>
        { this.renderPosts() }
        <p>this is posts</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
};

export default connect(mapStateToProps, {fetchPosts})(Posts);
