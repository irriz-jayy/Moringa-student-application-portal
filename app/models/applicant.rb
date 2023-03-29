class Applicant < ApplicationRecord
    has_many :applications
    has_many :courses, through: :applications
    # has_secure_password
  end