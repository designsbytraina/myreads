import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import * as BooksAPI from './BooksAPI';
import Nav from './Nav';
import Shelf from './Shelf';
import SearchBooks from './SearchBooks';

class App extends React.Component {
  state = {
    books: [],
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then( (books) => {
        this.setState( () => ({books}) );
      });
  }

  updateShelf = (bookID, shelf) => {
    const filteredBooks = this.state.books.filter((b) => {
      return b.id !== bookID
    });

    const thisBook = this.state.books.filter((b) => {
      return b.id === bookID
    }).map( (book) => {
      book.shelf = shelf;
      return book;
    });

    console.log(thisBook);

    this.setState({books: filteredBooks.concat(thisBook)});

    // update server with new shelf
    BooksAPI.update(bookID, shelf)
      .then( (resp) => {
        console.log(resp);

        BooksAPI.getAll()
        .then( (books) => {
          this.setState( () => ({books}) );
        });
      });
  }

  render() {
    const currentlyReading = this.state.books.filter( (book) => book.shelf === 'currentlyReading' );
    const readLater = this.state.books.filter( (book) => book.shelf === 'wantToRead' );
    const completedBooks = this.state.books.filter( (book) => book.shelf === 'read' );

    return (
      <div className='App'>
        <Nav />
        <Route exact path='/' render={ () => (
          <div className='homeRoute'>
            <Shelf myShelves={this.state.books} title='Currently Reading' books={currentlyReading} updateShelf={this.updateShelf} />
            <Shelf myShelves={this.state.books} title='Read Later' books={readLater} updateShelf={this.updateShelf} />
            <Shelf myShelves={this.state.books} title='Completed' books={completedBooks} updateShelf={this.updateShelf} />
          </div>
        ) } />
        <Route exact path='/search' render={ () => (
          <div className='searchRoute'>
            <SearchBooks myShelves={this.state.books} updateShelf={this.updateShelf} />
          </div>
        ) } />
      </div>
    );
  }
}

export default App;
