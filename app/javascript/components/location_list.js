import React from 'react'
import axios from 'axios'

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
            <div>
              <div key="-1" className="form-check">
                <label className="form-check-label">
                  <input
                    name="business-types"
                    type="radio"
                    value=""
                    onClick={event => this.setState({businessType: ""})}
                    className="form-check-input"
                  />
                  &nbsp;all
                </label>
              </div>
              {this.uniqueBusinessTypes().map((business_type, index) => {
                return (
                  <div key={index} className="form-check">
                    <label className="form-check-label">
                      <input
                        name="business-types"
                        type="radio"
                        value={business_type}
                        onClick={event => this.setState({businessType: event.target.value})}
                        className="form-check-input"
                      />
                     &nbsp;{business_type}
                    </label>
                  </div>
                )
              })}
            </div>
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
        </div>
        <hr/>
        <h6>Locations</h6>
        <div className="list-group">
          {this.state.list.map((location, index) => {
            return (
              <button
                key={index}
                onClick={() => this.props.setLocation(location['id'])}
                className="list-group-item list-group-item-action"
              >
                {location['name']}
              </button>
            )
          })}
        </div>
      </>
    )
  }
}