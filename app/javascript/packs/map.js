import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

const centerLocation = {lat: 28.0007, lng: -82.4548};

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const locations = [
  {name: 'test', location: {lat: 28.0020, lng: -82.4558}},
  {name: 'Ellas', location: {lat: 27.9935829, lng: -82.4531083}},
]

export class MapContainer extends Component {
  fetchLocations() {

  }

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={centerLocation}
        onReady={this.fetchLocations}
      >
        {locations.map(location => {
          console.log(location['name'])
          console.log(location['location'])
          return <Marker
            title="Hello"
            name={location['name']}
            position={location['location']}
          />
        })}
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBQaE0sHQ8YqwcwwCgfh0RJIdm7ve1Df5k'
})(MapContainer);
