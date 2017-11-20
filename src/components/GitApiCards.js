import React, { Component } from 'react';
import '../App.css';

class GitApiCards extends Component {
  render() {
    return (
      <div>
          <h1 style={{backgroundColor: "lightgray"}}>Git API Cards</h1>
          <p><strong>Takes an input of github user, and adds it to a list of github cards</strong></p>
          <p>React app working with components, state, and api call</p>
          <button onClick={()=> window.open("https://kpetski.github.io/git-api-cards/", '_blank')}>GitHub Page</button>
          <button className="button" onClick={()=> window.open("https://github.com/kpetski/git-api-cards", '_blank')}>GitHub Repo</button>     
      </div>
    );
  }
}

export default GitApiCards;