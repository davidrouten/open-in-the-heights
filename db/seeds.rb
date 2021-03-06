# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

locations = YAML.load_file(Rails.root.join('app', 'data', 'locations.yml'))

locations.each do |location|
  l = Location.find_by(name: location['name']) || Location.new
  next if l.locked && l.persisted?
  l.assign_attributes(location)

  l.drive_through_drive_up = false if l.drive_through_drive_up.nil?
  l.takeout = false if l.takeout.nil?
  l.delivery = false if l.delivery.nil?
  l.open = true if l.open.nil?
  l.visible = true if l.visible.nil?

  l.save
end
