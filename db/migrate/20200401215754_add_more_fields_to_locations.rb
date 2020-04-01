class AddMoreFieldsToLocations < ActiveRecord::Migration[6.0]
  def change
    add_column :locations, :delivery_notes, :text
    add_column :locations, :keywords, :string
  end
end
