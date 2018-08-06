import React, { Component } from 'react'
import Header from './components/Header'
import MapContainer from './components/MapContainer'
import MarkerList from './components/MarkerList'
import Footer from './components/Footer'
import './App.css';

class App extends Component {

  state = {
    markerListOpen: false,
    listLocations: null,
  }

  componentDidMount() {
    fetch('https://api.foursquare.com/v2/venues/search?ll=51.5055,-0.0754&query=parking&limit=6&radius=2000&client_id=5MFR2FIONG3CCN5IXQBUE3HFBKEECHZZ0Q1XNZVPZQEZMZDQ&client_secret=XVR2PAUVWZSPQY5RY0HZV54ZMBBXM2CWG4RKCGGQUT0JC0OU&v=20181001')
      .then(res => res.json())
      .then(data => this.setState({ listLocations: data }))
  }

  handleToggle = () => {
    if (this.state.markerListOpen) {
      this.setState({markerListOpen: false})
    } else {
      this.setState({markerListOpen: true})
    }
  }

  render() {
    console.log(this.state)
    return (
      <div className='app'>
        <Header />
        <MapContainer defaultLocation={this.state.defaultLocation}/>
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

// Google Maps API key: AIzaSyCIXjUR2aOOj9EGjnJVcG9pi3294fTp8yI
//Foursquare Client ID: 5MFR2FIONG3CCN5IXQBUE3HFBKEECHZZ0Q1XNZVPZQEZMZDQ
//Foursquare Client Secret: XVR2PAUVWZSPQY5RY0HZV54ZMBBXM2CWG4RKCGGQUT0JC0OU