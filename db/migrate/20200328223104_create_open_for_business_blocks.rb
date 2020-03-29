class CreateOpenForBusinessBlocks < ActiveRecord::Migration[6.0]
  def change
    create_table :open_for_business_blocks do |t|
      t.belongs_to :location, null: false, foreign_key: true
      t.string :name
      t.integer :day_of_week_index, required: true
      t.datetime :opens_at, required: true
      t.datetime :closes_at, required: true

      t.timestamps
    end
  end
end
