import React from 'react';
import Book from './Book';

class Shelf extends React.Component {
  render() {
    const shelfStyling = {
      backgroundColor: 'red',
      height: '100%'
    }

    const shelfTitleStyling = {
      fontWeight: '300',
      fontFamily: '"HelveticaNeue-Light", "Helvetica Neue Light", sans-serif'
    }

    const shelfBoxStyling = {
      display: 'inline-block',
      width: '100%'
    }

    return(
      <div style={shelfStyling}>
        <span style={shelfBoxStyling}>
          <h2 style={shelfTitleStyling}>Shelf Name</h2>
        </span>
        <Book book="pride and prejudice"/>
        <Book book="death of a salesman"/>
        <Book book="bible"/>
      </div>
    );
  }
}

export default Shelf;