class LocationSerializer < ActiveModel::Serializer
  attributes :id, :name, :tooltip, :description, :notes, :delivery_notes,
    :delivery_options, :keywords, :business_type, :contact_phone,
    :contact_email, :open_hours, :is_open, :is_closing_soon, :coords,
    :address, :hours, :links

  def is_open
    true
  end

  def is_closing_soon
    false
  end

  def delivery_options
    {
      drive_through_drive_up: object.drive_through_drive_up.present? ? 'Drive through/Drive up' : nil,
      takeout: object.takeout.present? ? 'Takeout' : nil,
      delivery: object.delivery.present? ? 'Delivery' : nil,
      dine_in: object.dine_in.present? ? 'Dine in' : nil
    }.compact.map { |key, value| value }.join(', ')
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
    {
      monday: object.hours_monday,
      tuesday: object.hours_tuesday,
      wednesday: object.hours_wednesday,
      thursday: object.hours_thursday,
      friday: object.hours_friday,
      saturday: object.hours_saturday,
      sunday: object.hours_sunday
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
