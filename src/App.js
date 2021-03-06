import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TicTacToe from './components/TicTacToe'
import Timer from './components/Timer'
import TableFetch from './components/TableFetch'
import Calculator from './components/Calculator'
import PlayNine from './components/PlayNine'
import GitApiCards from './components/GitApiCards'
import PokemonDoubleDamage from './components/PokemonDoubleDamage'
import Weather from './components/Weather'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Keri's Git Pages</h1>
        </header>
        <p className="App-intro">
          This React App contains information about my published GitHub Pages
        </p>
        <TicTacToe />
        <Timer />
        <TableFetch />
        <Weather />
        <GitApiCards />
        <Calculator />
        <PlayNine />
        <PokemonDoubleDamage />
      </div>
    );
  }
}

export default App;
