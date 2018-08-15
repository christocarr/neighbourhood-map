
import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps'

export class MapContainer extends Component {

  render() {
    const {
      filteredMarkers, 
      handleMarkerClick, 
      clickedMarkerVenueId,
      defaultCenter,
      defaultZoom,
      stopMarkerAnimation,
    } = this.props

    const Map = withGoogleMap(props => (
      <GoogleMap
        onClick={() => stopMarkerAnimation()}
        defaultCenter = {defaultCenter}
        defaultZoom = {defaultZoom}
      >
      {/* loop through markers array and return a marker to the map */}
      {filteredMarkers.map((marker, index) => (
        <Marker key={index}
          position= {{lat: marker.lat, lng: marker.lng}}
          animation={clickedMarkerVenueId === marker.venueId ? window.google.maps.Animation.BOUNCE : null}
          onClick={() => handleMarkerClick(marker.venueId, marker)}
        >
        {/* open infowindow if clicked marker is equal to marker id  */}
        {clickedMarkerVenueId === marker.venueId && (
          <InfoWindow 
            aria-label={`More details about ${marker.title}`}
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
      <div className='map-container' tabIndex='0'>
        <Map 
          containerElement= {
            <div style={{ height: '86vh', width: '90vw' }} /> 
          }
          mapElement={
            <div style={{ height: '100%' }} tabIndex='0'  />
          }
        />
      </div>
    )
  }
}

export default MapContainer


