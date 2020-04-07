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
      <>
        <div className="row" style={{ paddingTop: '60px' }}>
          <div className="col-md-12">
            <div className="alert alert-info py-2 small" role="alert">
              <strong>As this current situation is constantly changing, we are doing our best to keep information current but please call the business to confirm hours and availability.</strong><br/>Open in the Heights is an open source project whose goal is to connect our neighbors with our fantastic local eateries and businesses. Email us at <a href="mailto:support@openintheheights.com" className="text-primary" target="_blank">support@openintheheights.com</a> with questions and suggestions!
            </div>
          </div>
        </div>
        <div className="row" style={{ paddingBottom: '60px' }}>
          <div className="col-md-1"></div>
          <div className={ `col-md-6 ${shadowBoxClasses}`} style={ { height: '600px' } }>
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
      </>
    )
  }
}
