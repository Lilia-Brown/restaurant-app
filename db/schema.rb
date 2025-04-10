# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[8.0].define(version: 2025_04_07_202049) do
  create_table "dishes", force: :cascade do |t|
    t.string "name"
    t.string "img_url"
    t.string "description"
    t.integer "restaurant_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["restaurant_id"], name: "index_dishes_on_restaurant_id"
  end

  create_table "dishes_tags", id: false, force: :cascade do |t|
    t.integer "dish_id", null: false
    t.integer "tag_id", null: false
    t.index ["dish_id", "tag_id"], name: "index_dishes_tags_on_dish_id_and_tag_id", unique: true
    t.index ["dish_id"], name: "index_dishes_tags_on_dish_id"
    t.index ["tag_id"], name: "index_dishes_tags_on_tag_id"
  end

  create_table "restaurants", force: :cascade do |t|
    t.string "name"
    t.string "cuisine"
    t.string "website"
    t.string "slug"
    t.string "img_url"
    t.string "address"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "tags", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_tags_on_name", unique: true
  end

  add_foreign_key "dishes", "restaurants"
  add_foreign_key "dishes_tags", "dishes"
  add_foreign_key "dishes_tags", "tags"
end
