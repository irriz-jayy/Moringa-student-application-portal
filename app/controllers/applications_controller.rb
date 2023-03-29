class ApplicationsController < ApplicationController

    def index
      render json: Application.all
    end
    def create
      application = Application.create!(application_params)
      render json: application, status: :created
    end
  
    private
  
    def application_params
      params.permit(:course_id, :applicant_id, :status, :documents)
    end
  
end