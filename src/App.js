import React, { Component } from 'react'
import Header from './components/Header'
import MapContainer from './components/MapContainer'
import MarkerList from './components/MarkerList'
import Footer from './components/Footer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <Header />
        <MapContainer />
        <MarkerList />
        <Footer />
      </div>
    )
  }
}

export default App

// Maps API key: AIzaSyCIXjUR2aOOj9EGjnJVcG9pi3294fTp8yI