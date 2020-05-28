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

ActiveRecord::Schema.define(version: 2020_05_28_111544) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "interview_participants", force: :cascade do |t|
    t.bigint "interview_id"
    t.bigint "participant_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["interview_id"], name: "index_interview_participants_on_interview_id"
    t.index ["participant_id"], name: "index_interview_participants_on_participant_id"
  end

  create_table "interviews", force: :cascade do |t|
    t.string "description"
    t.datetime "start_time"
    t.datetime "end_time"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "participants", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "address"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "role"
    t.string "pdf_file_name"
    t.string "pdf_content_type"
    t.bigint "pdf_file_size"
    t.datetime "pdf_updated_at"
  end

  add_foreign_key "interview_participants", "interviews"
  add_foreign_key "interview_participants", "participants"
end
