class CreateCourses < ActiveRecord::Migration[7.0]
  def change
    create_table :courses do |t|
      t.string :title
      t.string :short_description
      t.string :description
      t.string :course_modules
      t.string :status
      t.string :banner
      t.string :requirements
      t.float :fee
      t.datetime :start_date
      t.integer :duration 

      t.timestamps
    end
  end
end
