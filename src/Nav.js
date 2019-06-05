import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
  render() {
    const navStyling = {
      color: 'grey',
      backgroundColor: 'rgba(183,159,25,.5)',
      height: '60px',
      padding: '10px'
    }

    const linkStyling = {
      fontWeight: '400',
      fontSize: '20px',
      textTransform: 'uppercase',
      textDecoration: 'none',
      padding: '0 10px 0 10px'
    }

    const linkDivStyling = {
      display: 'inline'
    }

    const logoStyling = {
      fontSize: '50px',
      fontWeight: '100',
      textDecoration: 'none'
    }

    return(
      <nav style={navStyling}>
        <Link to='/' style={logoStyling}>MyReads</Link>
        <div style={linkDivStyling}>
          <Link to='/' style={linkStyling}>My Shelves</Link>
          <Link to='/search' style={linkStyling}>Search Library</Link>
        </div>
      </nav>
    );
  }
}

export default Nav;
