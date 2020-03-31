# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

def get_coords(location)
  results = Geokit::Geocoders::GoogleGeocoder.geocode([location['name'], location['city'], location['state']].join(', '))

  { lat: results.lat, lng: results.lng }
end

locations = YAML.load_file(Rails.root.join('app', 'data', 'restaurants.yml'))

locations.each do |location|
  l = Location.find_by(name: location['name']) || Location.new
  l.assign_attributes(location)

  l.drive_through_drive_up = false if l.drive_through_drive_up.nil?
  l.takeout = false if l.takeout.nil?
  l.delivery = false if l.delivery.nil?
  l.open = true if l.open.nil?
  l.visible = true if l.visible.nil?

  coords = get_coords(location)
  l.address_lat = coords[:lat]
  l.address_lng = coords[:lng]

  l.save
end
