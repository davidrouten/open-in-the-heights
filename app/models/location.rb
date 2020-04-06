class Location < ApplicationRecord
  before_save :update_lat_lng
  has_many :open_for_business_blocks
  scope :is_visible, -> { where(visible: true) }
  scope :is_open, -> { where(open: true) }

  belongs_to :created_by, class_name: "User"
  belongs_to :updated_by, class_name: "User"

  def self.unique_business_types
    Location.pluck(:business_type).uniq
  end

  private

  def update_lat_lng
    return false unless self.address_lat.blank? || self.address_lng.blank?

    results = LatLngFinder.from_location(self)

    self.address_lat = results[:lat] if self.address_lat.blank?
    self.address_lng = results[:lng] if self.address_lng.blank?
  end
end
