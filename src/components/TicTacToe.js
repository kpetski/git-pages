import React, { Component } from 'react';
import '../App.css';

class TicTacToe extends Component {
  render() {
    return (
      <div>
          <h1 style={{backgroundColor: "lightgray"}}>Tic-Tac-Toe</h1>
          <p style={{fontWeight: "bold"}}>Created this project following an <a href="https://reactjs.org/tutorial/tutorial.html" target="_blank" rel="noopener noreferrer">Intro To React Tutorial</a></p>
          <p>This project helped to understand the basics of React and how state works</p>
          <button onClick={()=> window.open("https://kpetski.github.io/tic-tac-toe/", '_blank')}>GitHub Page</button>
          <button className="button" onClick={()=> window.open("https://github.com/kpetski/tic-tac-toe", '_blank')}>GitHub Repo</button>     
      </div>
    );
  }
}

export default TicTacToe;