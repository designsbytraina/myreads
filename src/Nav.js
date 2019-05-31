import React from 'react';

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
        <a href='/' style={logoStyling}>MyReads</a>
        <div style={linkDivStyling}>
          <a href='/' style={linkStyling}>My Shelves</a>
          <a href='/search' style={linkStyling}>Search Library</a>
        </div>
      </nav>
    );
  }
}

export default Nav;