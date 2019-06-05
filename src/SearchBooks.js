import React from 'react';

class SearchBooks extends React.Component {
  state = {
    query: ''
  }

  render() {
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

    return(
      <div style={searchStyling}>
        <form style={searchBoxStyling}>
          <input type='text' style={searchTitleStyling} placeholder='Search' />
        </form>
      </div>
    );
  }
}

export default SearchBooks;