
import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps'

export class MapContainer extends Component {

  render() {
    const { 
      venues, 
      handleMarkerClick, 
      clickedMarkerVenueId,
      defaultCenter,
      defaultZoom,
      stopMarkerAnimation,
    } = this.props

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
            venueId: venue.id,
            streetNumber: venue.location.formattedAddress[0],
            postCode: venue.location.formattedAddress[3],
        }
        markers.push(marker)
      })
    }

    const Map = withGoogleMap(props => (
      <GoogleMap
        onClick={() => stopMarkerAnimation()}
        defaultCenter = {defaultCenter}
        defaultZoom = {defaultZoom}
      >
      {/* loop through markers array and return a marker to the map */}
      {markers.map((marker, index) => (
        <Marker key={index}
          position= {{lat: marker.lat, lng: marker.lng}}
          animation={clickedMarkerVenueId === marker.venueId ? window.google.maps.Animation.BOUNCE : null}
          onClick={() => handleMarkerClick(marker.venueId, marker)}
        >
        {/* open infowindow if clicked marker is equal to marker id  */}
        {clickedMarkerVenueId === marker.venueId && (
          <InfoWindow 
            className='infowindow'
            onCloseClick={() => stopMarkerAnimation()}
          >
            <div>
              <h3>{marker.title}</h3>
              <p>{`${marker.streetNumber}, ${marker.postCode} `}</p>
            </div>
          </InfoWindow>)}
        </Marker>
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


