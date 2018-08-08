import React, { Component } from 'react'

class MarkerList extends Component {

  render() {

    const { listIsOpen,
            toggleList,
            venues,
            markerListItemClick } = this.props   
    
    return (
      <div>
        {listIsOpen ? (
          <div className='marker-list-open'>
            <input type='text' className='list-filter'/>
            <div className='marker-list-container'>
              <ul className='venue-list'>
                {venues.map(venue => {
                  return (
                    <li 
                      key={venue.id} 
                      onClick={() => markerListItemClick(venue.id)}
                    >{venue.name}</li>
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