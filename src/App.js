import React, { Component } from 'react'
import Header from './components/Header'
import MapContainer from './components/MapContainer'
import MarkerList from './components/MarkerList'
import Footer from './components/Footer'
import './App.css';

class App extends Component {

  state = {
    markerListOpen: false
  }

  handleToggle = () => {
    if (this.state.markerListOpen) {
      this.setState({markerListOpen: false})
    } else {
      this.setState({markerListOpen: true})
    }
  }

  render() {
    return (
      <div className='app'>
        <Header />
        <MapContainer />
        <MarkerList 
          markerListOpen={this.state.markerListOpen}
          toggleList={this.handleToggle}
        />
        <Footer />
      </div>
    )
  }
}

export default App

// Maps API key: AIzaSyCIXjUR2aOOj9EGjnJVcG9pi3294fTp8yI