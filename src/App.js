import React, { Component } from 'react'
import Header from './Header'
import MapContainer from './MapContainer'
import MarkerList from './MarkerList'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <MapContainer />
        <MarkerList />
      </div>
    )
  }
}

export default App

// Maps API key: AIzaSyCIXjUR2aOOj9EGjnJVcG9pi3294fTp8yI