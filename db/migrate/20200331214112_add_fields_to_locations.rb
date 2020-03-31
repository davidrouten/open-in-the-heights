class AddFieldsToLocations < ActiveRecord::Migration[6.0]
  def change
    add_column :locations, :business_type, :string
    add_column :locations, :notes, :text
  end
end
