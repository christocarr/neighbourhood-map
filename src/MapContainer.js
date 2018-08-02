import React, { Component } from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps'
import MarkerList from './MarkerList'

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
            <div style={{ height: '100vh', width: '94vw', float: 'right'  }} /> 
          }
          mapElement={
            <div style={{ height: '100%' }} />
          }
        />
        <MarkerList />
      </div>
    )
  }
}

export default MapContainer


