import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

class Nav extends React.Component {
  render() {
    return(
      <nav className='Nav'>
        <Link to='/' className='logo'>MyReads</Link>
        <div className='links-right'>
          <Link to='/' className='links'>My Shelves</Link>
          <Link to='/search' className='links'>Search Library</Link>
        </div>
      </nav>
    );
  }
}

export default Nav;
