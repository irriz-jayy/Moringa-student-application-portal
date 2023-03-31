class Applicant < ApplicationRecord
    has_many :applications, dependent: :destroy
    has_many :courses, through: :applications, dependent: :destroy
    has_secure_password


    validates :first_name, presence: true
    validates :last_name, presence: true
    validates :email, presence: true,  uniqueness: true
    validate :over_18

    private
    def over_18
      if date_of_birth.present? && ((Date.today - date_of_birth).to_i/365) < 18
      if date_of_birth.present? && ((Date.today - date_of_birth).to_i/365) < 18
        errors.add(:age, "must be over 18 years old")
      end
    end
  end