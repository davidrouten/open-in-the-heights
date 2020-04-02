class AddHourFieldsToLocations < ActiveRecord::Migration[6.0]
  def change
    add_column :locations, :hours_monday, :string
    add_column :locations, :hours_tuesday, :string
    add_column :locations, :hours_wednesday, :string
    add_column :locations, :hours_thursday, :string
    add_column :locations, :hours_friday, :string
    add_column :locations, :hours_saturday, :string
    add_column :locations, :hours_sunday, :string
  end
end
