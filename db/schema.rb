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

ActiveRecord::Schema.define(version: 2020_05_11_185942) do

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
    t.text "open_hours"
    t.string "business_type"
    t.text "notes"
    t.text "delivery_notes"
    t.string "keywords"
    t.string "hours_monday"
    t.string "hours_tuesday"
    t.string "hours_wednesday"
    t.string "hours_thursday"
    t.string "hours_friday"
    t.string "hours_saturday"
    t.string "hours_sunday"
    t.boolean "locked", default: true
    t.bigint "created_by_id"
    t.bigint "updated_by_id"
    t.boolean "dine_in"
    t.index ["created_by_id"], name: "index_locations_on_created_by_id"
    t.index ["updated_by_id"], name: "index_locations_on_updated_by_id"
  end

  create_table "open_for_business_blocks", force: :cascade do |t|
    t.bigint "location_id", null: false
    t.string "name"
    t.integer "day_of_week_index"
    t.datetime "opens_at"
    t.datetime "closes_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["location_id"], name: "index_open_for_business_blocks_on_location_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet "current_sign_in_ip"
    t.inet "last_sign_in_ip"
    t.string "first_name"
    t.string "last_name"
    t.string "role"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "locations", "users", column: "created_by_id"
  add_foreign_key "locations", "users", column: "updated_by_id"
  add_foreign_key "open_for_business_blocks", "locations"
end
