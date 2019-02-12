import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="wrapper" className="wrapperShadow">
        <div id="banner" className="shadow">
          <h1 id="bannerText">Welcome to Half Foods!</h1>
          <h1 id="menuItem">Login</h1>
          <h1 id="menuItem">View Cart</h1>
          <h1 id="menuItem">History</h1>
        </div>
      </div>
    );
  }
}

export default App;
