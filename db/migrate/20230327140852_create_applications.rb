class CreateApplications < ActiveRecord::Migration[7.0]
  def change
    create_table :applications do |t|
      t.belongs_to :applicant, null: false, foreign_key: :true
      t.belongs_to :course, null: false, foreign_key: :true
      t.string :documents
      t.string :status
      
      t.timestamps
    end
  end
end
