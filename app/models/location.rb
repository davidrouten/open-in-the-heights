class Location < ApplicationRecord
  scope :visible, -> { where(visible: true) }
end
