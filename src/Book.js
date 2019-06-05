import React from 'react';

function Book(props) {
  const bookRowStyling = {
    display: 'inline-block',
    margin: '15px',
    border: '4px solid black',
    width: '175px',
    height: '250px'
  }
  return(
    <div style={bookRowStyling}>
      <h1>{props.book.title}</h1>
      <p>{props.book.shelf}</p>
    </div>
  );
}

export default Book;
