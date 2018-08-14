import React, { Component } from 'react'
import Header from './components/Header'
import MapContainer from './components/MapContainer'
import MarkerList from './components/MarkerList'
import Footer from './components/Footer'
import './App.css';

class App extends Component {

  state = {
    defaultCenter: {
      lat: 51.5055,
      lng: -0.0754
    } ,
    defaultZoom: 12,
    listIsOpen: false,
    venues: [],
    clickedMarkerVenueId: null,
    zoom: 14,
    query: '',
  }

  //get six parking locations in a 2km radius from foursquare 
  componentDidMount() {
    fetch('https://api.foursquare.com/v2/venues/search?ll=51.5055,-0.0754&query=burgers,pizza&limit=15&radius=2000&client_id=5MFR2FIONG3CCN5IXQBUE3HFBKEECHZZ0Q1XNZVPZQEZMZDQ&client_secret=XVR2PAUVWZSPQY5RY0HZV54ZMBBXM2CWG4RKCGGQUT0JC0OU&v=20181001')
      .then(res => res.json())
      .then(data => this.setState({ venues: data.response.venues }))
      .catch((error) => {
        alert(`There has been an error data from the Foursquare API. 
        Please try again!
        error:`, error)
      })
  }

  //function to open and close marker list
  handleToggle = () => {
    if (this.state.listIsOpen) {
      this.setState({listIsOpen: false})
    } else {
      this.setState({listIsOpen: true})
    }
  }

  //handle text search to find particular cuisine in list
  handleInputSearch = (e) => {
    // const searchedCuisine = this.state.venues.categories.shortName
    const cuisines = this.state.cuisines
    this.setState({ query: e.target.value })
    const matchedSearch = cuisines
      .filter(cuisine => cuisine === '' || cuisine.includes(this.state.query))
    console.log(this.state.query)
    console.log(matchedSearch)
  }

   //infoWindow handler
   handleMarkerClick = (venueId, marker) =>  {
    this.setState({ 
      clickedMarkerVenueId: venueId,
      defaultCenter: {
        lat: marker.lat,
        lng: marker.lng
      },
      defaultZoom: this.state.zoom,
     })
  }

  //stop marker animation
  stopMarkerAnimation = () => {
    this.setState({ 
      clickedMarkerVenueId: -1,
      defaultCenter: {
        lat: 51.5055,
        lng: -0.0754
      } ,
      defaultZoom: 13,
    })
  }

  render() {
    return (
      <div className='app'>
        <Header />
        <MapContainer
          defaultCenter={this.state.defaultCenter}
          defaultZoom={this.state.defaultZoom}
          venues={this.state.venues}  
          zoom={this.state.zoom}
          handleMarkerClick={this.handleMarkerClick}
          clickedMarkerVenueId={this.state.clickedMarkerVenueId}
          stopMarkerAnimation={this.stopMarkerAnimation}
        />
        <MarkerList 
          venues={this.state.venues}
          listIsOpen={this.state.listIsOpen}
          toggleList={this.handleToggle}
          handleListItemClick={this.handleMarkerClick}
          clickedMarkerVenueId={this.state.clickedMarkerVenueId}
          userInput={this.state.query}
          handleInputSearch={this.handleInputSearch}
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