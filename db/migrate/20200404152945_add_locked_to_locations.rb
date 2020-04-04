class AddLockedToLocations < ActiveRecord::Migration[6.0]
  def change
    add_column :locations, :locked, :boolean, default: true
  end
end
