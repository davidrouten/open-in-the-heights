class AddDineInOptionToLocations < ActiveRecord::Migration[6.0]
  def change
    add_column :locations, :dine_in, :boolean
  end
end
