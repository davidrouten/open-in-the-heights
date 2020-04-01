import React from 'react'
import axios from 'axios'

export default class LocationList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
      searchTerm: '',
      businessType: ''
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

    return params.map(row => `${row[0]}=${row[1]}`).join('&')
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.searchTerm !== prevState.searchTerm || this.state.businessType != prevState.businessType) {
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
        <h5>Type of Business</h5>
        <div>
          <div key="-1" className="form-check">
            <label className="form-check-label">
              <input
                name="business-types"
                type="radio"
                value=""
                onClick={(event) => this.setState({businessType: ""})}
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
                    onClick={(event) => this.setState({businessType: event.target.value})}
                    className="form-check-input"
                  />
                 &nbsp;{business_type}
                </label>
              </div>
            )
          })}
        </div>
        <h1 className="text-center">Locations</h1>
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