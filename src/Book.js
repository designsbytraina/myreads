import React from 'react';
import './Book.css';
// import * as BooksAPI from './BooksAPI';

class Book extends React.Component {
  state = {
    menuOpen: false,
    activeShelf: '',
    imageURL: ''
  }

  componentDidMount() {
    this.setState({
      activeShelf: this.props.book.shelf,
      imageURL: this.props.book.imageLinks.thumbnail
    });
  }

  closeMenu = () => {
    this.setState( {menuOpen: false} );
  }

  render() {
    return(
      <div className='Book'>
        <img src={this.state.imageURL} className='book-img' alt='placeholder' />
        <button className='add-button' onClick={ () => this.setState({menuOpen: true}) }>
          <svg fill="#fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className='add-svg'>
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
          </svg>
        </button>
        {this.state.menuOpen === true &&
          <div className='move-menu'>
            <p className='move-menu-text'>
              <span className='add-to-text'><strong>Add to</strong></span><br/>
              <button className={`add-to-link ${this.state.activeShelf === 'currentlyReading' ? 'active' : ''}`} onClick={ () => {this.props.updateShelf(this.props.book.id, 'currentlyReading'); this.setState({menuOpen: false, activeShelf: 'currentlyReading'});} }>+ Currently Reading</button><br/>
              <button className={`add-to-link ${this.state.activeShelf === 'wantToRead' ? 'active' : ''}`}  onClick={ () => {this.props.updateShelf(this.props.book.id, 'wantToRead'); this.setState({menuOpen: false, activeShelf: 'wantToRead'});} }>+ Read Later</button><br/>
              <button className={`add-to-link ${this.state.activeShelf === 'read' ? 'active' : ''}`} onClick={ () => {this.props.updateShelf(this.props.book.id, 'read'); this.setState({menuOpen: false, activeShelf: 'read'});} }>+ Completed</button>

              <button className={`remove-link ${this.state.activeShelf === '' ? 'hidden' : ''}`} onClick={ () => {this.props.updateShelf(this.props.book.id, 'none'); this.setState({menuOpen: false, activeShelf: ''});} }>Remove from shelf</button><br/>
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
