class CreateLocations < ActiveRecord::Migration[6.0]
  def change
    create_table :locations do |t|
      t.string :name, required: true
      t.string :tooltip
      t.text :description
      t.string :contact_name
      t.string :contact_email
      t.string :contact_phone
      t.string :contact_fax
      t.string :link_facebook
      t.string :link_twitter
      t.string :link_instagram
      t.string :link_website
      t.string :link_menu
      t.string :address_lat
      t.string :address_lng
      t.string :address_street
      t.string :address_street2
      t.string :address_city
      t.string :address_state
      t.string :address_zip
      t.boolean :drive_through_drive_up
      t.boolean :takeout
      t.boolean :delivery
      t.boolean :open
      t.boolean :visible

      t.timestamps
    end
  end
end
