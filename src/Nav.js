import React from 'react';

class Nav extends React.Component {
  render() {
    const navStyling = {
      color: 'grey'
    }

    const logoStyling = {
      fontSize: '50px',
    }

    return(
      <nav style={navStyling}>
        <a style={logoStyling}>MyReads</a>
        <a>My Shelves</a>
        <a>Search Library</a>
      </nav>
    );
  }
}

export default Nav;