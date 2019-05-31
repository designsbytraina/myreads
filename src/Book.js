import React from 'react';

function Book(props) {
  const bookRowStyling = {
    display: 'inline-block'
  }
  return(
    <div style={bookRowStyling}>
      <h1>{props.book}</h1>
    </div>
  );
}

export default Book;