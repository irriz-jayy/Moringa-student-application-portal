class Course < ApplicationRecord
    has_many :applications, dependent: :destroy
    has_many :applicants, through: :applications, dependent: :destroy
  end