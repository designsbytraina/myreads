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
      fontFamily: '"HelveticaNeue-Light", "Helvetica Neue Light", sans-serif',
      width: '100%',
      borderBottom: '2px solid grey'
    }

    const shelfBoxStyling = {
      display: 'block',
      marginTop: '0em'
    }

    return(
      <div style={shelfStyling}>
        <span style={shelfBoxStyling}>
          <h2 style={shelfTitleStyling}>{this.props.title}</h2>
        </span>
        {this.props.books.map( (book) => (
          <Book key={book.id} book={book} updateShelf={this.props.updateShelf} />)
        )}
      </div>
    );
  }
}

export default Shelf;
