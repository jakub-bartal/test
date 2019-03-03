import React, { Component } from 'react';
import './App.css';
import {getTeamArticlesDescription} from "./getTeamArticlesDescription"

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>{getTeamArticlesDescription(1)}</p>
        <p>{getTeamArticlesDescription(2)}</p>
      </div>
    );
  }
}

export default App;
