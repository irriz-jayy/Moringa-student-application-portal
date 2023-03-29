class ApplicationsController < ApplicationController

    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    # rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    wrap_parameters format: []


    def index
        application = Application.all
        render json:application, except: [:created_at, :updated_at]
    end

    def show
        application = find_application
        render json: application, except: [:created_at, :updated_at], status: :ok    
    end
    
    def create
        application = Application.create(application_params)
        render json: application, status: :ok
    end

    def update
        application = find_application
        application.update!(application_params)
        render json: application, except: [:created_at, :updated_at], status: :created
    end

    def destroy
        application = find_application
        application.destroy
        head :no_content
    end

    private 

    def find_application
        Application.find(params[:id])
    end

    def application_params
        params.permit(:id, :applicant_id, :course_id, :documents, :status)
     end

    def render_not_found_response
        render json: {error: "application not found"}, status: :not_found
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors }, status: :unprocessable_entity
    end
end