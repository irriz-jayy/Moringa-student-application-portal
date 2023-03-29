class ApplicationSerializer < ActiveModel::Serializer
  attributes :id, :applicant_id, :course_id, :documents, :status

  belongs_to :applicant
  belongs_to :course
end
