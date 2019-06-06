import React from 'react';
import Book from './Book';
import './Shelf.css';

class Shelf extends React.Component {
  render() {
    return(
      <div className='Shelf'>
        <span className='shelf-title-box'>
          <h2 className='shelf-title'>{this.props.title}</h2>
        </span>
        {this.props.books.map( (book) => (
          <Book book={book} key={book.id} updateShelf={this.props.updateShelf} />)
        )}
      </div>
    );
  }
}

export default Shelf;
