class LatLngFinder
  def self.from_location(location)
    results = Geokit::Geocoders::GoogleGeocoder.geocode([location.name, location.address_street, location.address_city, location.address_state].join(', '))

    { lat: results.lat, lng: results.lng }
  end

  def self.from_location_hash(location)
    results = Geokit::Geocoders::GoogleGeocoder.geocode([location['name'], location['address_street'], location['address_city'], location['address_state']].join(', '))

    { lat: results.lat, lng: results.lng }
  end
end