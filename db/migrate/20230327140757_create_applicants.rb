class CreateApplicants < ActiveRecord::Migration[7.0]
  def change
    create_table :applicants do |t|
      t.string :username
      t.string :first_name
      t.string :last_name
      t.integer :age
      t.date :date_of_birth
      t.string :email
      t.string :password_digest


      t.timestamps
    end
  end
end
