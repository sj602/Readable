import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/posts';
import '../styles/posts.css';
import { Link } from 'react-router-dom';
import Vote from './vote';

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
        console.log(post)
        return (
            <li key={post.id}>
              <Link to='{post.category}/{post.id}'>
                <h1>{post.title}</h1>
              </Link>
              <p> by {post.author}</p>
              <p> Comments: {post.commentCount}</p>
              <Vote value={post}/>
            </li>
        )
      })
    }
  }

  render() {
     return (
      <div className='posts'>
        { this.renderPosts() }
        <div className='post-detail'>
        </div>
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
  fetchPosts,
})(Posts);
