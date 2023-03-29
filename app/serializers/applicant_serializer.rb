class ApplicantSerializer < ApplicationSerializer
  attributes :id, :username, :first_name, :last_name, :age, :date_of_birth, :email

  has_many :applications
end
