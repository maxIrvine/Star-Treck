import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Spaceship from './Spaceship';
import CrewMember from './CrewMember';
import BadAlien from './BadAlien';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Spaceship name="Discovery" commanderType="CrewMember">
          <CrewMember name="Spock" rank="Commander" />
          <CrewMember name="Wesley" rank="Ensign" />
          <BadAlien name="Borg" species="Borg" />
        </Spaceship>
      </div>
    );
  }
}

export default App;
