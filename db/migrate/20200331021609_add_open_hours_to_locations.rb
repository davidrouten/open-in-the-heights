class AddOpenHoursToLocations < ActiveRecord::Migration[6.0]
  def change
    add_column :locations, :open_hours, :text
  end
end
