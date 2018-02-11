import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar'
import { BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <NavBar />
        </Router>
      </div>
    );
  }
}

export default App;
