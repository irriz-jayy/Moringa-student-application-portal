class Course < ApplicationRecord
    validates :short_description, length: {minimum: 20}, presence: true
    validates :description, length: {maximum: 20}, presence: true

    has_many :applications
    has_many :applicants, through: :applications

end
