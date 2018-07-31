import React, { Component } from 'react';
import './App.css';
import { Map, GoogleApiWrapper } from 'google-maps-react'

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  }

  render() {

    if (!this.props.google) {
      return <div>Loading...</div>
    }

    return (
      <div>
        <Map
          google={this.props.google}
          initialCenter={{
            lat: 51.550503,
            lng: -0.304841
          }}
          zoom={15}
        />
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCIXjUR2aOOj9EGjnJVcG9pi3294fTp8yI'
})(MapContainer)

//API key: AIzaSyCIXjUR2aOOj9EGjnJVcG9pi3294fTp8yI
