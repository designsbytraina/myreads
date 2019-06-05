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
  // state = {
  //   books: [
  //     {
  //       title: 'Pride & Prejudice',
  //       author: 'Jane Austen',
  //       dateAddedToShelf: '',
  //       shelf: 'currentlyReading'
  //     }
  //   ]
  // }

  componentDidMount() {
    BooksAPI.getAll()
      .then( (books) => {
        this.setState( () => ({books}) )
      } );
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
            <Shelf title='Currently Reading' books={ currentlyReading } />
            <Shelf title='Read Later' books={ readLater } />
            <Shelf title='Completed' books={ completedBooks } />
          </div>
        ) } />
        <Route exact path='/search' render={ () => (
          <div className='searchRoute'>
            <SearchBooks books={this.state.books}/>
          </div>
        ) } />

      </div>
    );
  }
}

export default App;
