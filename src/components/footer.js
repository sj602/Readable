import React, { Component } from 'react';
import FaGithub from 'react-icons/lib/fa/github';
import FaLinkedinSquare from 'react-icons/lib/fa/linkedin-square';
import '../styles/footer.css';

export default class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <a target='_blank' href='https://github.com/sj602/Readable'><FaGithub size={30} /></a>
        <a target='_blank' href='https://www.linkedin.com/in/jinseon602/'><FaLinkedinSquare size={30} /></a>
      </div>
    )
  }
}
