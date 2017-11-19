import React, { Component } from 'react';
import '../App.css';

class Calculator extends Component {
  render() {
    return (
      <div>
          <h1 style={{backgroundColor: "lightgray"}}>Calculator</h1>
          <p style={{fontWeight: "bold"}}>iPhone like calculator. Started with <a href="https://github.com/ReactTraining/react-workshop/blob/master/subjects/Calculator/styles.css" target="_blank" rel="noopener noreferrer">CSS</a> and <a href="https://github.com/ReactTraining/react-workshop/blob/master/subjects/Calculator/exercise.js" target="_blank" rel="noopener noreferrer">exercise</a> starter code rendering the calculator</p>
          <p>CSS Logic was prebuild.  Solidifying knowlege of React and state by building out calculator functionality</p>
          <button onClick={()=> window.open("https://kpetski.github.io/calculator", '_blank')}>GitHub Page</button>
          <button className="button" onClick={()=> window.open("https://github.com/kpetski/calculator", '_blank')}>GitHub Repo</button>     
      </div>
    );
  }
}

export default Calculator;