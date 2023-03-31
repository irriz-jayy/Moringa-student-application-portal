class Applicant < ApplicationRecord
    has_many :applications, dependent: :destroy
    has_many :courses, through: :applications, dependent: :destroy
    has_secure_password


    validates :first_name, presence: true
    validates :last_name, presence: true, uniqueness: true
    validates :email, presence: true,  uniqueness: true
    validate :over_18
    validate :validate_age


    private

    def validate_age
      if age? && age < 18
        errors.add(:age, "must be at least 18 years old")
      end
    end

    def over_18
      if date_of_birth.present? && date_of_birth >= Date.today.year - 18
        errors.add(:age, "must be over 18 years old")
      end
    end
  end