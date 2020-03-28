import React from 'react'
import axios from 'axios'

export default class LocationList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: []
    }
    this.searchLocations = this.searchLocations.bind(this)
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
        <input className="form-control" onChange={event => this.searchLocations(event.target.value)}></input>
        <h1 className="text-center">Locations</h1>
        <div>
          {this.state.list.map((location, index) => {
            return <div key={index}>{location['name']}</div>
          })}
        </div>
      </>
    )
  }
}