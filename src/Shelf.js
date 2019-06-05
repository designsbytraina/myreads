import React from 'react';
import Book from './Book';

class Shelf extends React.Component {
  render() {
    const shelfStyling = {
      backgroundColor: 'lightblue',
      margin: '35px'
    }

    const shelfTitleStyling = {
      fontWeight: '300',
      fontFamily: '"HelveticaNeue-Light", "Helvetica Neue Light", sans-serif'
    }

    const shelfBoxStyling = {
      display: 'inline-block',
      width: '100%',
      borderBottom: '2px solid grey'
    }

    return(
      <div style={shelfStyling}>
        <span style={shelfBoxStyling}>
          <h2 style={shelfTitleStyling}>{this.props.title}</h2>
        </span>
        {this.props.books.map( (book) => (
          <Book book={book} />)
        )}
      </div>
    );
  }
}

export default Shelf;