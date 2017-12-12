import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './header';
import { getPost } from '../actions/posts';
import '../styles/posts.css';
import { Link } from 'react-router-dom';
import {
  Card, CardBody,
  CardText, CardTitle,
  CardSubtitle, CardFooter
} from 'reactstrap';

class PostDetail extends Component {
  componentWillMount() {
    const { id } = this.props.match.params;
    this.props.getPost(id)
  }

  render() {
    const { post } = this.props.posts;
    // console.log(this.props.posts.post)
    return (
      <div className='container'>
        <Header />
        { post && (
          <Card>
            <CardBody>
              <CardTitle>{post.title}</CardTitle>
              <CardSubtitle>written by {post.author}</CardSubtitle>
              <CardText style={{marginTop: '30px'}}>{post.body}</CardText>
            </CardBody>
            <CardFooter>s</CardFooter>
          </Card>

        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    post: state.post
  }
};

export default connect(mapStateToProps, {getPost})(PostDetail);
