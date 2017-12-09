import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCategories } from '../actions/categories';
import '../styles/header.css';

class Header extends Component {
  state = {
    categories: [],
  }

  componentWillMount() {
    this.props.fetchCategories()
      .then(data => data.categories)
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
      return categories.map((cat) => {
        return (
            <li key={cat.name}>{cat.name}</li>
        )
      })
    }
  }

  render() {
     return (
      <div className='header'>
        <li>ALL</li>
        { this.renderCategories() }
        <p>this is header</p>
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
