import React from 'react';
import Book from './Book';
import './SearchBooks.css';

class SearchBooks extends React.Component {
  state = {
    query: ''
  }

  updateQuery(queryString) {
    this.setState({ query: queryString });
  }

  render() {
    // if the query is not empty, we will show results
    const showBooks = this.state.query !== ''
      ? this.props.books.filter( (book) => book.title.toLowerCase().includes(this.state.query.toLowerCase()))
      : []

    return(
      <div className='SearchBooks'>
        <div className='search-container'>
          <input type='text' className='search-input' placeholder='Search' value={this.state.query} onChange={(evt) => this.updateQuery(evt.target.value)}/>
        </div>

        <div className='results-container'>
          {showBooks.map( (book) => (
            <Book book={book} key={book.id} updateShelf={this.props.updateShelf} />
          ) )}
        </div>
      </div>
    );
  }
}

export default SearchBooks;