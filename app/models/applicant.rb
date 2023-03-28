class Applicant < ApplicationRecord
    # validates :date_of_birth, presence: true
    # validates :age, numericality: { greater_than_or_equal_to: 18 }, presence: true

    has_many :applications, dependent: :destroy
    has_many :courses, through: :applications, dependent: :destroy
    
end



