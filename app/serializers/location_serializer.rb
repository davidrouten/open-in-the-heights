class LocationSerializer < ActiveModel::Serializer
  attributes :id, :name, :tooltip, :description, :coords

  def coords
    { lat: object.address_lat, lng: object.address_lng }
  end
end
