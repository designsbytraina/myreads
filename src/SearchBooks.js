import React from 'react';
import Book from './Book';

class SearchBooks extends React.Component {
  state = {
    query: ''
  }

  updateQuery(queryString) {
    this.setState({ query: queryString.trim() });
  }

  clearQuery() {
    this.updateQuery('');
  }

  render() {
    // if the query is not empty, we will show results
    const showBooks = this.state.query === ''
      ? this.props.books
      : this.props.books.filter( (book) => book.title.toLowerCase().includes(this.state.query.toLowerCase()));

    const searchStyling = {
      backgroundColor: 'lightblue',
      margin: '34px'
    }

    const searchTitleStyling = {
      fontWeight: '300',
      fontFamily: '"HelveticaNeue-Light", "Helvetica Neue Light", sans-serif',
      border: 'none',
      borderBottom: '2px solid grey',
      width: '100%',
      fontSize: 'x-large'
    }

    const searchBoxStyling = {
      width: '100%;'
    }

    const resultsBoxStyling = {}

    return(
      <div style={searchStyling}>
        <div style={searchBoxStyling}>
          <input type='text' style={searchTitleStyling} placeholder='Search' value={this.state.query} onChange={(evt) => this.updateQuery(evt.target.value)}/>
        </div>

        <div style={resultsBoxStyling}>
          {showBooks.map( (book) => (
            <Book book={book} />
          ) )}
        </div>
      </div>
    );
  }
}

export default SearchBooks;