# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_03_28_160551) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "locations", force: :cascade do |t|
    t.string "name"
    t.string "tooltip"
    t.text "description"
    t.string "contact_name"
    t.string "contact_email"
    t.string "contact_phone"
    t.string "contact_fax"
    t.string "link_facebook"
    t.string "link_twitter"
    t.string "link_instagram"
    t.string "link_website"
    t.string "link_menu"
    t.string "address_lat"
    t.string "address_lng"
    t.string "address_street"
    t.string "address_street2"
    t.string "address_city"
    t.string "address_state"
    t.string "address_zip"
    t.boolean "drive_through_drive_up"
    t.boolean "takeout"
    t.boolean "delivery"
    t.boolean "open"
    t.boolean "visible"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
