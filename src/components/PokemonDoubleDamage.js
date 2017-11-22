import React, { Component } from 'react';
import '../App.css';

class PokemonDoubleDamage extends Component {
  render() {
    return (
      <div>
          <h1 style={{backgroundColor: "lightgray"}}>Pokemon Double Damage</h1>
          <p><strong>Calculates the types and pokemon that are double damage to the input type</strong></p>
          <p>React App to demonstrate multiple fetches with promises and displaying data.</p>
          <button onClick={()=> window.open("https://kpetski.github.io/pick-pokemon-for-battle/", '_blank')}>GitHub Page</button>
          <button className="button" onClick={()=> window.open("https://github.com/kpetski/pick-pokemon-for-battle", '_blank')}>GitHub Repo</button>     
      </div>
    );
  }
}

export default PokemonDoubleDamage;