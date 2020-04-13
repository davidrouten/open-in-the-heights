import React from 'react'
import axios from 'axios'
import { Icon } from './icon'
import { capitalize, getDayOfWeek, buildAddress } from './utils'

export default class LocationList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
      searchTerm: '',
      businessType: '',
      driveThroughDriveUp: false,
      takeout: false,
      delivery: false,
      currentDayOfWeek: getDayOfWeek(new Date()),
    }
    this.searchLocations = this.searchLocations.bind(this)
    this.searchLocations('')
  }

  searchLocations() {
    axios.get(`/api/search?${this.buildSearchQuery()}`)
      .then(response => {
        this.setState({list: response.data})
      })
      .catch(error => {
        console.log(error)
      })
  }

  buildSearchQuery() {
    var params = []

    if (this.state.searchTerm) {
      params.push(['term', encodeURIComponent(this.state.searchTerm)])
    }

    if (this.state.businessType) {
      params.push(['business_type', encodeURIComponent(this.state.businessType)])
    }

    if (this.state.driveThroughDriveUp) {
      params.push(['drive_through_drive_up', this.state.driveThroughDriveUp])
    }

    if (this.state.takeout) {
      params.push(['takeout', this.state.takeout])
    }

    if (this.state.delivery) {
      params.push(['delivery', this.state.delivery])
    }

    return params.map(row => `${row[0]}=${row[1]}`).join('&')
  }

  buildCurrentDayHours(location) {
    var hours = location['hours'][this.state.currentDayOfWeek]
    if (!hours) return null

    return `${capitalize(this.state.currentDayOfWeek)}: ${hours}`
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.searchTerm !== prevState.searchTerm ||
        this.state.businessType !== prevState.businessType ||
        this.state.driveThroughDriveUp !== prevState.driveThroughDriveUp ||
        this.state.takeout !== prevState.takeout ||
        this.state.delivery !== prevState.delivery) {
      this.searchLocations()
    }
  }

  uniqueBusinessTypes() {
    return [...new Set(this.props.locations.map(location => location['business_type']))]
  }

  render() {
    return (
      <>
        <input
          value={this.state.searchTerm}
          className="form-control"
          onChange={(event) => this.setState({searchTerm: event.target.value})}
          placeholder="Search..."
        />
        <hr/>
        <div className="row">
          <div className="col-md-6">
            <h6>Type of Business</h6>
            <select className="form-control" onChange={event => this.setState({businessType: event.target.value})} value={this.state.businessType}>
              <option value="">all</option>
              {this.uniqueBusinessTypes().sort().map((business_type, index) => {
                return (
                  <option value={business_type} key={index}>{business_type}</option>
                )
              })}
            </select>
          </div>
          <div className="col-md-6">
            <h6>Delivery Options</h6>
            <div key="driveThroughDriveUp">
              <label className="form-check-label">
                <input
                  type="checkbox"
                  onClick={event => this.setState({driveThroughDriveUp: event.target.checked})}
                />
                &nbsp;Drive Through / Drive Up
              </label>
            </div>
            <div key="takeout">
              <label className="form-check-label">
                <input
                  type="checkbox"
                  onClick={event => this.setState({takeout: event.target.checked})}
                />
                &nbsp;Takeout
              </label>
            </div>
            <div key="delivery">
              <label className="form-check-label">
                <input
                  type="checkbox"
                  onClick={event => this.setState({delivery: event.target.checked})}
                />
                &nbsp;Delivery
              </label>
            </div>
          </div>
          <div className="col-md-12 text-muted small mt-2">For restaurants participating in <a href="https://www.facebook.com/groups/heightsbrigade/" target="_blank">Heights Citizens Bicycle Brigade</a> free local delivery, look for HCBB under the delivery notes OR search for HCBB.
          </div>
        </div>
        <hr/>
        <h6>Locations</h6>
        <div className="list-group">
          {this.state.list.map((location, index) => {
            return (
              <button
                type="button"
                key={index}
                onClick={() => this.props.setLocation(location['id'])}
                className="list-group-item py-2 px-2 list-group-item-action"
              >
                <div className="d-flex w-100 justify-content-between">
                  <h5 className="mb-1">{location['name']}</h5>
                  <small>{location['business_type']}</small>
                </div>
                {location['hours'][this.state.currentDayOfWeek] ? (
                  <p className={`mb-0 ${location['is_open'] ? 'text-success' : 'text-danger'}`}><Icon name="clock"/>&nbsp;{this.buildCurrentDayHours(location)}</p>
                ) : (
                  null
                )}
                <small>{buildAddress(location['address'])}</small>
              </button>
            )
          })}
        </div>
      </>
    )
  }
}