import React, { Component } from 'react';
import '../App.css';

class Timer extends Component {
  render() {
    return (
      <div>
          <h1 style={{backgroundColor: "lightgray"}}>Timer</h1>
          <p><strong>Timer for 5, 10, 15 minutes or custom time</strong></p>
          <p>Simple React App to solidify knowledge of state and components</p>
          <button onClick={()=> window.open("https://kpetski.github.io/react-timer/", '_blank')}>GitHub Page</button>
          <button className="button" onClick={()=> window.open("https://github.com/kpetski/react-timer", '_blank')}>GitHub Repo</button>     
      </div>
    );
  }
}

export default Timer;