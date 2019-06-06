import React from 'react';
import './Book.css';
// import * as BooksAPI from './BooksAPI';

class Book extends React.Component {
  state = {
    menuOpen: false,
    activeShelf: 'none'
  }

  // DNU: BooksAPI is not working on update method
  // updateShelf = (bookID, shelf) => {
  //   console.log(bookID, shelf);
  //   BooksAPI.update(bookID, shelf)
  //     .then( (resp) => {
  //       console.log(resp);
  //       this.setState( {menuOpen: false} );
  //     } );
  // }

  componentDidMount() {
    this.setState({
      activeShelf: this.props.book.shelf
    });
  }

  closeMenu = () => {
    this.setState( {menuOpen: false} );
  }

  render() {
    return(
      <div className='Book'>
        <img src='https://via.placeholder.com/170x205' className='book-img' alt='placeholder' />
        <a onClick={ () => this.setState({menuOpen: true}) }>
          <svg fill="#fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className='add-svg'>
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
          </svg>
        </a>
        {this.state.menuOpen === true &&
          <div className='move-menu'>
            <p className='move-menu-text'>
              <span className='add-to-text'><strong>Add to</strong></span><br/>
              <button className={`add-to-link ${this.state.activeShelf === 'currentlyReading' ? 'active' : ''}`} onClick={ () => {this.props.updateShelf(this.props.book.id, 'currentlyReading'); this.setState({menuOpen: false, activeShelf: 'currentlyReading'});} }>+ Currently Reading</button><br/>
              <button className={`add-to-link ${this.state.activeShelf === 'wantToRead' ? 'active' : ''}`}  onClick={ () => {this.props.updateShelf(this.props.book.id, 'wantToRead'); this.setState({menuOpen: false, activeShelf: 'wantToRead'});} }>+ Read Later</button><br/>
              <button className={`add-to-link ${this.state.activeShelf === 'read' ? 'active' : ''}`} onClick={ () => {this.props.updateShelf(this.props.book.id, 'read'); this.setState({menuOpen: false, activeShelf: 'read'});} }>+ Completed</button>
            </p>

            <button className='close-button' onClick={ () => this.setState({menuOpen: false}) }>
              <svg fill="#fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className='close-svg'>
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
              </svg>
            </button>
          </div>
        }
        <p className='book-title'>{this.props.book.title}</p>
        {this.props.book.authors.map( (authorName) => (
          <p key={authorName} className='book-author'>{authorName}</p>
        ) )}
      </div>
    );
  }
}

export default Book;
