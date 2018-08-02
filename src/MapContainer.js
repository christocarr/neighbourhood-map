import React, { Component } from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps'
import MarkerListOpener from './MarkerListOpener'

export class MapContainer extends Component {

  render() {

    const Map = withGoogleMap(props => (
      <GoogleMap
        defaultCenter = {{
          lat: 40.756795,
          lng: -73.954298
        }}
        defaultZoom = { 13 }
      >
      </GoogleMap>
    ))

    return (
      <div>
        <Map 
          containerElement= {
            <div style={{ height: '100vh', width: '100vw', position: 'relative'  }} /> 
          }
          mapElement={
            <div style={{ height: '100%' }} />
          }
        />
        <MarkerListOpener />
      </div>
    )
  }
}

export default MapContainer


