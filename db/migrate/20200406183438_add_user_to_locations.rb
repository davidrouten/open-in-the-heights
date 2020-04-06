class AddUserToLocations < ActiveRecord::Migration[6.0]
  def change
    add_reference :locations, :created_by, null: true, foreign_key: { to_table: :users }
    add_reference :locations, :updated_by, null: true, foreign_key: { to_table: :users }
  end
end
