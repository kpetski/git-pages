import React, { Component } from 'react';
import '../App.css';

class Weather extends Component {
  render() {
    return (
      <div>
          <h1 style={{backgroundColor: "lightgray"}}>React Weather</h1>
          <p><strong>Takes an input city, and returns the weather for that city</strong></p>
          <p>React app working with components, state, and api call</p>
          <button onClick={()=> window.open("https://kpetski.github.io/react-weather/", '_blank')}>GitHub Page</button>
          <button className="button" onClick={()=> window.open("https://github.com/kpetski/react-weather", '_blank')}>GitHub Repo</button>     
      </div>
    );
  }
}

export default Weather;