class Location < ApplicationRecord
  has_many :open_for_business_blocks
  scope :visible, -> { where(visible: true) }
end
