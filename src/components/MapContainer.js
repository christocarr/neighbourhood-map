import React, { Component } from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps'

export class MapContainer extends Component {

  render() {

    const Map = withGoogleMap(props => (
      <GoogleMap
        defaultCenter = {{
          lat: 51.5502021,
          lng: -0.2986521
        }}
        defaultZoom = { 13 }
      >
      </GoogleMap>
    ))

    return (
      <div className='map-container'>
        <Map 
          containerElement= {
            <div style={{ height: '86vh', width: '90vw' }} /> 
          }
          mapElement={
            <div style={{ height: '100%' }} />
          }
        />
      </div>
    )
  }
}

export default MapContainer


