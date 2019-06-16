import React from 'react';
import Book from './Book';
import * as BooksAPI from './BooksAPI';
import './SearchBooks.css';

class SearchBooks extends React.Component {
  state = {
    query: '',
    books: [],
  }

  searchBooksAPI(query) {
    BooksAPI.search(query.toLowerCase())
      .then( (resp) => {
        resp.error ? this.setState({books:[]}) : this.setState({ books: resp });
      } );
  }

  updateQuery(queryString) {
    this.setState({ query: queryString });
    queryString !== '' ? this.searchBooksAPI(queryString) : this.setState( {books: []} )
  }

  render() {
    const showBooks = this.state.books;
    let showEmptyMessage;
    showBooks.length < 1 && this.state.query !== '' ? showEmptyMessage = true : showEmptyMessage = false

    return(
      <div className='SearchBooks'>
        <div className='search-container'>
          <input type='text' className='search-input' placeholder='Search Titles' value={this.state.query} onChange={(evt) => this.updateQuery(evt.target.value)}/>
        </div>

        <div className='results-container'>
          {showBooks.map( (book) => (
            <Book myShelves={this.props.myShelves} book={book} key={book.id} updateShelf={this.props.updateShelf} />
          ) )}
          {showEmptyMessage === true
            ? (<p>There are no results matching your query.</p>)
            : (<p></p>)
          }
        </div>
      </div>
    );
  }
}

export default SearchBooks;
