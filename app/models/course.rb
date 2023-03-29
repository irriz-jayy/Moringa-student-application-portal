class Course < ApplicationRecord
    has_many :applications
    has_many :applicants, through: :applications
  end