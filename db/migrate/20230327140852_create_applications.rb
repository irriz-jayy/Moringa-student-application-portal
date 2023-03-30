class CreateApplications < ActiveRecord::Migration[7.0]
  def change
    create_table :applications do |t|
      t.integer :applicant_id, null: false, foreign_key: :true
      t.integer :course_id, null: false, foreign_key: :true
      t.string :documents
      t.string :status
      
      t.timestamps
    end
  end
end
