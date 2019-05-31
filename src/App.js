import React from 'react';
import './App.css';
import Nav from './Nav';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Nav />
        Shelf<br/>
        Book<br/>
      </div>
    );
  }
}

export default App;
