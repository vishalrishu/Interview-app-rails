class CreateInterviews < ActiveRecord::Migration[6.0]
  def change
    create_table :interviews do |t|
      t.string :description
      t.datetime :startTime
      t.datetime :endTime

      t.timestamps
    end
  end
end
