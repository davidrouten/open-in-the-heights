import React from 'react'
import MapContainer from '../components/map'
import { Location } from '../components/location'
import LocationList from '../components/location_list'
import axios from 'axios'


export class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentLocation: {}
    }
    this.fetchAndSetLocation = this.fetchAndSetLocation.bind(this)
  }


  fetchAndSetLocation(id) {
    axios.get(`/api/locations/${id}`)
      .then(response => {
        this.setState({currentLocation: response.data})
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    return (
      <div className="row" style={ { marginTop: '40px' } }>
        <div className="col-md-1"></div>
        <div className="col-md-6" style={ { minHeight: '640px' } }>
          <MapContainer setLocation={this.fetchAndSetLocation}/>
        </div>
        <div className="col-md-4">
          {(Object.keys(this.state.currentLocation).length === 0 && this.state.currentLocation.constructor === Object) ? (
            <LocationList />
          ) : (
            <Location data={this.state.currentLocation} />
          )}
        </div>
        <div className="col-md-1"></div>
      </div>
    )
  }
}
