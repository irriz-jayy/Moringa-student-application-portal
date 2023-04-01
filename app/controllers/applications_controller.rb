class ApplicationsController < ApplicationController
  skip_before_action :authorize, only: [:index, :create]

    def index
      render json: Application.all
    end

    def show
      application = find_applications
      render json: application, status: :ok
    end

    def create
      application = Application.create!(application_params)
      render json: application, status: :created
    end

    def update
      application = find_applications
      application.update!(application_params)
      render json: application, except: [:created_at, :updated_at], status: :created
    end

    def destroy
      application = find_applications
      application.destroy
      head :no_content
    end

    private

    def find_applications
      Application.find(params[:id])
    end

    def application_params
      params.permit(:id, :applicant_id, :course_id, :documents, :status)
   end

    def application_params
      params.permit(:course_id, :applicant_id, :status, :documents)
    end

end
