import React, { Component } from 'react'

class MarkerList extends Component {

  render() {

    const listIsOpen = this.props.markerListOpen
    const toggleList = this.props.toggleList

    return (
      <div>
        {listIsOpen ? (
          <div className='marker-list-open'>
            <div className='list-toggle-close'>
              <img className='toggle-icon' src={require('../images/chevron-sign-to-left.svg')} alt='list closer' onClick={toggleList} />
            </div>
          </div> 
        ) : (
          <div className='marker-list-closed'>
            <div className='list-toggle-open'>
              <img className='toggle-icon' src={require('../images/chevron-sign-to-right.svg')} alt='list opener' 
              onClick={toggleList} />
            </div>
          </div>
        )}
      </div> 
    )
  }
}
export default MarkerList