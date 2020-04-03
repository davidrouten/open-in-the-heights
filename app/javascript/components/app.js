import React from 'react'
import MapContainer from '../components/map'
import { Location } from '../components/location'
import LocationList from '../components/location_list'
import axios from 'axios'

const shadowBoxClasses = 'shadow p-3 mb-5 bg-white rounded'

export class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      locations: [],
      currentMarker: null,
      currentLocation: {}
    }
    this.setLocation = this.setLocation.bind(this)
    this.setMarker = this.setMarker.bind(this)
    this.clearCurrentLocation = this.clearCurrentLocation.bind(this)

    this.fetchLocations()
  }

  fetchLocations() {
    axios.get('/api/locations')
      .then(response => {
        this.setState({locations: response.data})
      })
      .catch(error => {
        console.log(error)
      })
  }

  setLocation(id) {
    this.setState({currentLocation: this.state.locations.find(location => location['id'] === id)})
  }

  setMarker(marker) {
    this.setState({currentMarker: marker})
  }

  clearCurrentLocation() {
    this.setState({
      currentLocation: {},
      currentMarker: null
    })
  }

  render() {
    return (
      <div className="row" style={ { marginTop: '40px' } }>
        <div className="col-md-1"></div>
        <div className={ `col-md-6 ${shadowBoxClasses}`} style={ { height: '560px' } }>
          <MapContainer
            locations={this.state.locations}
            currentLocation={this.state.currentLocation}
            currentMarker={this.state.currentMarker}
            setLocation={this.setLocation}
            setMarker={this.setMarker}
          />
        </div>
        <div className="col-md-4">
          {(Object.keys(this.state.currentLocation).length === 0 && this.state.currentLocation.constructor === Object) ? (
            <LocationList locations={this.state.locations} setLocation={this.setLocation} />
          ) : (
            <Location data={this.state.currentLocation} clearCurrentLocation={this.clearCurrentLocation} />
          )}
        </div>
        <div className="col-md-1"></div>
      </div>
    )
  }
}
