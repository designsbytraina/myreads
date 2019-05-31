import React from 'react';
import './App.css';
import Nav from './Nav';
import Shelf from './Shelf';

class App extends React.Component {
  state = {
    books: [
      {
        title: 'Pride & Prejudice',
        author: 'Jane Austen',
        dateAddedToShelf: '',
        shelf: 'currentlyReading'
      },
      {
        title: 'Things Fall Apart',
        author: 'Chinowa Achebe',
        dateAddedToShelf: '',
        shelf: 'readLater'
      },
      {
        title: 'Ficciones',
        author: 'Jorge Luis Borges',
        dateAddedToShelf: '',
        shelf: 'completed'
      }
    ]
  }

  render() {
    // const currentlyReading = this.state.books.filter( (book) => book.shelf === 'currentlyReading' );
    return (
      <div className='App'>
        <Nav />
        <Shelf title='Currently Reading' books={this.state.books.filter( (book) => book.shelf === 'currentlyReading' )} />
        <Shelf title='Read Later' books={this.state.books.filter( (book) => book.shelf === 'readLater' )} />
        <Shelf title='Completed' books={this.state.books.filter( (book) => book.shelf === 'completed' )} />
      </div>
    );
  }
}

export default App;
