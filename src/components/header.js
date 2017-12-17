import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCategories } from '../actions/categories';
import { Link } from 'react-router-dom';
import '../styles/header.css';

class Header extends Component {
  state = {
    categories: [],
  }

  componentWillMount() {
    this.props.fetchCategories()
      .then(data => {
        this.setState({categories: data.categories})
      })
  }

  renderCategories() {
    const { categories } = this.state
    if(categories === []) {
      return (
          <p>There are no categories.</p>
      )
    }

    if(categories) {
      return categories.map((category) => {
        return (
            <li key={category.name}>
              <Link to={`/${category.path}`}>
                {category.name}
              </Link>
            </li>
        )
      })
    }
  }

  render() {
     return (
      <div className='header'>
        <div className='header-title'>
          Readable
        </div>
        <Link to='/'>
          ALL
        </Link>
        <ul>
          { this.renderCategories() }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories
  }
};

export default connect(mapStateToProps, {fetchCategories})(Header);
