class CourseSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :short_description, :course_modules, :status , :banner, :requirements, :fee, :start_date, :duration

  
end