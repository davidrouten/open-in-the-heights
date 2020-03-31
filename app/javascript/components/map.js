import React from 'react'
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react'
import axios from 'axios'

const mapStyle = {
  width: '100%',
  height: '100%'
};

const containerStyle = {
  position: 'unset',
  width: '100%',
  height: '100%'
}

export class MapContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      centerLocation: {lat: 28.0007, lng: -82.4548}
    }
  }

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyle}
        containerStyle={containerStyle}
        initialCenter={this.state.centerLocation}
      >
        {this.props.locations.sort().map((location, index) => {
          return <Marker
                   title={location['name']}
                   name={location['name']}
                   position={location['coords']}
                   onClick={() => this.props.setLocation(location['id'])}
                   key={index}
                 />
        })}
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBQaE0sHQ8YqwcwwCgfh0RJIdm7ve1Df5k'
})(MapContainer);
