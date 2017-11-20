import React, { Component } from 'react';
import '../App.css';

class PlayNine extends Component {
  render() {
    return (
      <div>
          <h1 style={{backgroundColor: "lightgray"}}>Play Nine</h1>
          <p><strong>Shut Box Like Game</strong></p>
          <p>React app solidifying knowledge of state and components.  A little bit more complicated of an example.</p>
          <button onClick={()=> window.open("https://kpetski.github.io/play-nine/", '_blank')}>GitHub Page</button>
          <button className="button" onClick={()=> window.open("https://github.com/kpetski/play-nine", '_blank')}>GitHub Repo</button>     
      </div>
    );
  }
}

export default PlayNine;