import React, { Component } from 'react';
import './App.css';
import MapContainer from './MapContainer';

class App extends Component {


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Neighbourhood Map</h1>
        </header>
          <MapContainer />
      </div>
    );
  }
}

export default App;

//API key: AIzaSyCIXjUR2aOOj9EGjnJVcG9pi3294fTp8yI
