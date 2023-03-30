class ApplicationSerializer < ActiveModel::Serializer
  attributes :id, :documents, :status

    belongs_to :applicant
    belongs_to :course
    
end
