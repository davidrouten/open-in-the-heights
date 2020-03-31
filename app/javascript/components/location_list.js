import React from 'react'
import axios from 'axios'

export default class LocationList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: []
    }
    this.searchLocations = this.searchLocations.bind(this)
    this.searchLocations('')
  }

  searchLocations(term) {
    axios.get(`/api/search?term=${term}`)
      .then(response => {
        this.setState({list: response.data})
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    return (
      <>
        <input className="form-control" onChange={event => this.searchLocations(event.target.value)} placeholder="Search..."></input>
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