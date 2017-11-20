import React, { Component } from 'react';
import '../App.css';

class TableFetch extends Component {
  render() {
    return (
      <div>
          <h1 style={{backgroundColor: "lightgray"}}>Table Fetch</h1>
          <p><strong>Displays fetched data in a table</strong></p>
          <p>Simple React App to demonstrate fetching and displaying data.  Also utilizing bootstrap</p>
          <p>Some Valid Username to try: jordwalke, sophiebits, zpao, azat-co, kpetski</p>
          <button onClick={()=> window.open("https://kpetski.github.io/table-fetch-example/", '_blank')}>GitHub Page</button>
          <button className="button" onClick={()=> window.open("https://github.com/kpetski/table-fetch-example", '_blank')}>GitHub Repo</button>     
      </div>
    );
  }
}

export default TableFetch;