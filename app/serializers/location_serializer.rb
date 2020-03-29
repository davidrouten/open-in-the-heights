class LocationSerializer < ActiveModel::Serializer
  attributes :id, :name, :tooltip, :description, :is_open, :is_closing_soon, :coords, :hours

  def is_open
    true
  end

  def is_closing_soon
    false
  end

  def coords
    { lat: object.address_lat, lng: object.address_lng }
  end

  def hours
    ['Mon 10am - 5pm','Tue 10am - 5pm','Wed 10am - 5pm']
  end
end
