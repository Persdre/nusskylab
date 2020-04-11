class CreateMilestones < ActiveRecord::Migration
  def change
    create_table :milestones do |t|
      t.date :deadline
      t.string :name

      t.timestamps null: false
    end
  end
end
