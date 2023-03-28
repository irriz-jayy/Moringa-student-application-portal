class Course < ApplicationRecord
    # validates :short_description, length: {minimum: 20}, presence: true
    # validates :description, length: {minimum: 20}, presence: true

    has_many :applications, dependent: :destroy
    has_many :applicants, through: :applications, dependent: :destroy

end
