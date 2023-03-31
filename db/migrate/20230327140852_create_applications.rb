class CreateApplications < ActiveRecord::Migration[7.0]
  def change
    create_table :applications do |t|
      t.integer :applicant_id 
      t.integer :course_id
      t.string :documents
      t.string :status
      
      t.timestamps
    end
  end
end
