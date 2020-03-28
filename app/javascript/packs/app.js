import React from 'react'
import MapContainer from '../components/map'
import LocationList from '../components/location_list'

export const App = () => {
  return (
    <div className="row" style={ { marginTop: '40px' } }>
      <div className="col-md-1"></div>
      <div className="col-md-6" style={ { minHeight: '640px' } }>
        <MapContainer />
      </div>
      <div className="col-md-4">
        <LocationList />
      </div>
      <div className="col-md-1"></div>
    </div>
  )
}
