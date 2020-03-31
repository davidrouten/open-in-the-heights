import React from 'react'
import { Map, Marker, InfoWindow, GoogleApiWrapper } from 'google-maps-react'
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

  onMarkerClick = (props, marker, e) => {
    this.props.setLocation(props.id)
    this.props.setMarker(marker)
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
        <InfoWindow
          marker={this.props.currentMarker}
          visible={Boolean(this.props.currentMarker)}>
            <div>{this.props.currentLocation['name']}</div>
        </InfoWindow>
        {this.props.locations.map((location, index) => {
          return <Marker
                   id={location['id']}
                   title={location['name']}
                   name={location['name']}
                   position={location['coords']}
                   onClick={this.onMarkerClick}
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
