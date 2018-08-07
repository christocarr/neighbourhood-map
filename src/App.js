import React, { Component } from 'react'
import Header from './components/Header'
import MapContainer from './components/MapContainer'
import MarkerList from './components/MarkerList'
import Footer from './components/Footer'
import './App.css';

class App extends Component {

  state = {
    markerListOpen: false,
    venues: [],
  }

  //get six parking locations in a 2km radius from foursquare 
  componentDidMount() {
    fetch('https://api.foursquare.com/v2/venues/search?ll=51.5055,-0.0754&query=parking&limit=6&radius=2000&client_id=5MFR2FIONG3CCN5IXQBUE3HFBKEECHZZ0Q1XNZVPZQEZMZDQ&client_secret=XVR2PAUVWZSPQY5RY0HZV54ZMBBXM2CWG4RKCGGQUT0JC0OU&v=20181001')
      .then(res => res.json())
      .then(data => this.setState({ venues: data.response.venues }))
  }

  //function to open and close marker list
  handleToggle = (e) => {
    // e.preventDefault
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
        <MapContainer 
          venues={this.state.venues}  
        />
        <MarkerList 
          venues={this.state.venues}
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