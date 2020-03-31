class LocationSerializer < ActiveModel::Serializer
  attributes :id, :name, :tooltip, :description, :contact_phone, :contact_email, :is_open, :is_closing_soon, :coords, :address, :hours, :links

  def is_open
    true
  end

  def is_closing_soon
    false
  end

  def coords
    { lat: object.address_lat, lng: object.address_lng }
  end

  def address
    {
      street: object.address_street,
      street2: object.address_street2,
      city: object.address_city,
      state: object.address_state,
      zip: object.address_zip
    }
  end

  def hours
    ['Mon 10am - 5pm','Tue 10am - 5pm','Wed 10am - 5pm']
  end

  def links
    [
      {
        name: 'Facebook',
        url: object.link_facebook
      },
      {
        name: 'Twitter',
        url: object.link_twitter
      },
      {
        name: 'Instagram',
        url: object.link_instagram
      },
      {
        name: 'Website',
        url: object.link_website
      },
      {
        name: 'Menu',
        url: object.link_menu
      }
    ].reject { |obj| obj[:url].blank? }
  end
end
