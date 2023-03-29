class Application < ApplicationRecord
  belongs_to :applicant
  belongs_to :course
end
