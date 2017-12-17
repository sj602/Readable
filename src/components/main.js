import React, { Component } from 'react';
import Header from './header';
import Posts from './posts';
import Footer from './footer';

class Main extends Component {
  render() {
    const category = this.props.location.pathname.slice(1)

    return (
      <div className='container'>
        <Header />
        <Posts category={category}/>
        <Footer />
      </div>
    )
  }
}

export default Main;
