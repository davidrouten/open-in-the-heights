class LocationSerializer < ActiveModel::Serializer
  attributes :id, :name, :tooltip, :description, :notes, :delivery_notes,
    :business_type, :contact_phone, :contact_email, :open_hours, :is_open,
    :is_closing_soon, :coords, :address, :links

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
