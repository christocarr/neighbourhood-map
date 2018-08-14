import React, { Component } from 'react'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

class MarkerList extends Component {

  state = {
    query: ''
  }

  //input onChange handler
  updateQuery = (query) => {
    this.setState({ query: query.trim() })
  }

  render() {

    const { listIsOpen,
            toggleList,
            markers,
            handleListItemClick,
          } = this.props
      
    // let venuesHasValue = false
    // let markers = []
    //check whether venues array is valid
    // if(venues !== undefined && venues.length > 0 && venues!== null) {
    //   venuesHasValue = true
    // }
    //if venues array is not empty then loop through and return only //data that is needed
    // if (venuesHasValue) {
    //   let marker = {}
    //   venues.map(venue => {
    //       marker = {
    //         lat: venue.location.lat,
    //         lng: venue.location.lng,
    //         title: venue.name,
    //         venueId: venue.id,
    //         streetNumber: venue.location.formattedAddress[0],
    //         postCode: venue.location.formattedAddress[3],
    //     }
    //     markers.push(marker)
    //   })
    // }
    
    let showingMarkers 
    if (this.state.query) {
      const match = new RegExp(escapeRegExp(this.state.query), 'i')
      showingMarkers = markers.filter((marker) => match.test(marker.title))
    } else {
      showingMarkers = markers
    }

    //sort list alphabetically
    showingMarkers.sort(sortBy('title'))
    
    return (
      <div>
        {listIsOpen ? (
          <div className='marker-list-open'>
            <label htmlFor='search'>Search</label>
            <input 
              id='search'
              type='text' 
              placeholder='search for burger or pizza'
              aria-required='true'
              className='list-filter'
              value={this.state.query}
              onChange={(e) => this.updateQuery(e.target.value)}
            />
            <div className='marker-list-container'>
              <ul className='venue-list'>
                {showingMarkers.map((marker, index) => {
                  return (
                    <li 
                      tabIndex='0'
                      key={index} 
                      placeholder={'search for burger or pizza'}
                      onClick={() => handleListItemClick(marker.venueId, marker)}
                    >{marker.title}</li>
                  )  
                })}
              </ul>
              <div className='list-toggle-close'>
                <img className='toggle-icon' src={require('../images/menu.svg')} alt='list closer' onClick={toggleList} />
              </div>
            </div>
          </div> 
        ) : (
          <div className='marker-list-closed'>
            <div className='list-toggle-open'>
              <img className='toggle-icon' src={require('../images/menu.svg')} alt='list opener' 
              onClick={toggleList} />
            </div>
          </div>
        )}
      </div> 
    )
  }
}
export default MarkerList