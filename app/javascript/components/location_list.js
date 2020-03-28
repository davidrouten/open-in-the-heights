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
    axios.get(`/api/search/${term}`)
      .then(response => {
        console.log(response.data)
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
      </>
    )
  }
}