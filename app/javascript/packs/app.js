import React from 'react'
import MapContainer from './map'

export const App = () => {
  return (
    <div className="row" style={ { marginTop: '40px' } }>
      <div className="col-md-1"></div>
      <div className="col-md-6" style={ { height: '640px' } }>
        <MapContainer />
      </div>
      <div className="col-md-4"></div>
      <div className="col-md-1"></div>
    </div>
  )
}
