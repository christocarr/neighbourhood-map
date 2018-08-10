import React, { Component } from 'react'
import Header from './components/Header'
import MapContainer from './components/MapContainer'
import MarkerList from './components/MarkerList'
import Footer from './components/Footer'
import './App.css';

class App extends Component {

  state = {
    listIsOpen: false,
    venues: [],
    clickedMarkerVenueId: null,
    zoom: 17,
  }

  //get six parking locations in a 2km radius from foursquare 
  componentDidMount() {
    fetch('https://api.foursquare.com/v2/venues/search?ll=51.5055,-0.0754&query=burgers,pizza&limit=15&radius=2000&client_id=5MFR2FIONG3CCN5IXQBUE3HFBKEECHZZ0Q1XNZVPZQEZMZDQ&client_secret=XVR2PAUVWZSPQY5RY0HZV54ZMBBXM2CWG4RKCGGQUT0JC0OU&v=20181001')
      .then(res => res.json())
      .then(data => this.setState({ venues: data.response.venues }))
      .catch(error => console.log(error))
  }

  //function to open and close marker list
  handleToggle = (e) => {
    if (this.state.listIsOpen) {
      this.setState({listIsOpen: false})
    } else {
      this.setState({listIsOpen: true})
    }
  }

  render() {
    return (
      <div className='app'>
        <Header />
        <MapContainer 
          venues={this.state.venues}  
          markerClick={this.handleMarkerClick}
          infoWindowIsOpen={this.state.infoWindowIsOpen}
          zoom={this.state.zoom}
        />
        <MarkerList 
          venues={this.state.venues}
          listIsOpen={this.state.listIsOpen}
          toggleList={this.handleToggle}
          markerListItemClick={this.handleMarkerClick}
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