class ApplicantSerializer < ActiveModel::Serializer
  attributes :id, :username, :first_name, :last_name, :age, :date_of_birth, :email

end