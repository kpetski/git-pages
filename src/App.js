import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TicTacToe from './components/TicTacToe'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Keri's Git Pages</h1>
        </header>
        <p className="App-intro">
          This React App contains information about the GitHub Pages I've published
        </p>
        <TicTacToe />
      </div>
    );
  }
}

export default App;
