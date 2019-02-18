import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ItinerariesContainer from './containers/ItinerariesContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ItinerariesContainer />
      </div>
    );
  }
}

export default App;
