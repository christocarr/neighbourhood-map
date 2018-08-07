import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps'

export class MapContainer extends Component {

  render() {

    const { venues, markerClick } = this.props

    let venuesHasValue = false
    let markers = []
    //check whether venues array is valid
    if(venues !== undefined && venues.length > 0 && venues!== null) {
      venuesHasValue = true
    }
    //if venues array is not empty then loop through and return only //data that is needed
    if (venuesHasValue) {
      let marker = {}
      venues.map(venue => {
         marker = {
            lat: venue.location.lat,
            lng: venue.location.lng,
            title: venue.name,
            venueId: venue.id
        }
        markers.push(marker)
      })
    }
  
    const Map = withGoogleMap(props => (
      <GoogleMap
        defaultCenter = {{
          lat: 51.5055,
          lng: -0.0754
        }}
        defaultZoom = { 13 }
      >
      {/* loop through markers array and return a marker to the map */}
      {markers.map((marker, index) => (
        <Marker key={index}
          position= {{lat: marker.lat, lng: marker.lng}}
          onClick={markerClick(marker.venueId)}
        />
      ))}
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


