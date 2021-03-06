import React, { Component } from 'react';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom'
import './App.css';

import ItinerariesContainer from './containers/ItinerariesContainer'
import DatesContainer from './containers/DatesContainer'
import PointsContainer from './containers/PointsContainer'


const link={
  width: '100px',
  padding: '12px',
  margin: '0 2px 2px',
  background: 'lightgrey',
  textDecoration: 'none',
  color: 'darkblue'
}

const NavBar = () => 
  <div>
    <NavLink
      to="/"
      exact
      style={link}
      activeStyle={{
        background: 'darkgrey'
      }}
      >Home</NavLink>
      <NavLink
      to="/itineraries"
      exact
      style={link}
      activeStyle={{
        background: 'darkgrey'
      }}
      >Itineraries</NavLink>
  </div>


const Home = () => <h1>Your Itineraries</h1>

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <NavBar />
          <Route exact path="/" component={Home}/>
          <Route path="/itineraries" render={(routerProps)=> <ItinerariesContainer {...routerProps}/>}/>
          <Route path="/dates" render={(routerProps)=>(<DatesContainer {...routerProps}/>)}/>
          <Route path="/points" render={(routerProps)=>(<PointsContainer {...routerProps}/>)}/>
        </React.Fragment>
      </Router>  
    );
  }
}

export default App;
