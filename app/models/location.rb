class Location < ApplicationRecord
  before_save :update_lat_lng
  has_many :open_for_business_blocks
  scope :is_visible, -> { where(visible: true) }
  scope :is_open, -> { where(open: true) }

  EST = 'Eastern Time (US & Canada)'

  belongs_to :created_by, class_name: 'User', optional: true
  belongs_to :updated_by, class_name: 'User', optional: true

  def self.unique_business_types
    Location.pluck(:business_type).uniq
  end

  def open_hours_today
    day = DateTime.current.strftime('%A').downcase
    self.send("hours_#{day}")
  end

  def currently_open?
    return false if open_hours_today.blank? || open_hours_today.downcase == 'closed'
    from, til = open_hours_today.split('-')
    Time.parse(from).in_time_zone(EST) > Time.current.in_time_zone(EST) &&
      Time.current.in_time_zone(EST) > Time.parse(til).in_time_zone(EST)
  rescue
    nil
  end

  private

  def update_lat_lng
    return false unless self.address_lat.blank? || self.address_lng.blank?

    results = LatLngFinder.from_location(self)

    self.address_lat = results[:lat] if self.address_lat.blank?
    self.address_lng = results[:lng] if self.address_lng.blank?
  end
end
