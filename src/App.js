import React from 'react';
import './App.css';
import Nav from './Nav';
import Shelf from './Shelf';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Shelf />
      </div>
    );
  }
}

export default App;
