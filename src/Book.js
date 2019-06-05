import React from 'react';

class Book extends React.Component {
  state = {
    menuOpen: false
  }
  render() {

    const bookStyling = {
      display: 'inline-block',
      margin: '10px',
      padding: '10px',
      border: '4px solid black',
      width: '175px',
      height: '300px',
      overflow: 'hidden'
    }
    const bookImgStyling = {
      display: 'block',
      zIndex: '-1'
    }
    const bookTitleStyling = {
      fontSize: 'medium',
      marginTop: '5px',
      marginBottom: '5px',
      padding: '0'
    }
    const bookAuthorStyling = {
      fontSize: 'small',
      margin: '0',
      padding: '1px'
    }
    const svgStyling = {
      height: '30px',
      float: 'right',
      backgroundColor: 'rgba(183,159,25,1)',
      borderRadius: '15px',
      marginTop: '-20px',
      position: 'relative'
    }
    const moveMenuStyling = {
      backgroundColor: 'rgba(0,0,0,.4)',
      color: 'white',
      height: '283px',
      width: '158px',
      marginTop: '-215px',
      marginLeft: '-10px',
      position: 'absolute',
      display: 'block',
      padding: '20px'
    }
    const moveMenuTextStyling = {
      display: 'inline-block',
      paddingTop: '30px'
    }
    const addToStyling = {
      display: 'inline-block',
      paddingBottom: '10px'
    }
    const addToLinkStyling = {
      paddingLeft: '5px'
    }
    const closeButtonStyling = {
      float: 'right',
      marginTop: '30px'
    }

    return(
      <div style={bookStyling}>
        <img src='https://via.placeholder.com/170x205' style={bookImgStyling} alt='placeholder' />
        <a onClick={ () => this.setState({menuOpen: true}) }>
          <svg fill="#fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={svgStyling}>
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
          </svg>
        </a>
        {this.state.menuOpen === true &&
          <div style={moveMenuStyling}>
            <p style={moveMenuTextStyling}>
              <span style={addToStyling}><strong>Add to</strong></span><br/>
              <a style={addToLinkStyling}>+ Currently Reading</a><br/>
              <a style={addToLinkStyling}>+ Read Later</a><br/>
              <a style={addToLinkStyling}>+ Completed</a>
            </p>
            <button style={closeButtonStyling} onClick={ () => this.setState({menuOpen: false}) }>close</button>
          </div>
        }
        <p style={bookTitleStyling}>{this.props.book.title}</p>
        {this.props.book.authors.map( (authorName) => (
          <p style={bookAuthorStyling}>{authorName}</p>
        ) )}
      </div>
    );
  }
}

export default Book;
