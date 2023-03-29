class ApplicantsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    # rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
   wrap_parameters format: []

    def index
        applicant = Applicant.all
        render json:applicant, except: [:created_at, :updated_at]
    end

    def show
        applicant = find_applicant
        render json: applicant, except: [:created_at, :updated_at], status: :ok    
    end
    
    def create
        applicant = Applicant.create(applicant_params)
        render json: applicant, status: :ok
    end

    def update
        applicant = find_applicant
        applicant.update!(applicant_params)
        render json: applicant, except: [:created_at, :updated_at], status: :created
    end

    def destroy
        applicant = find_applicant
        applicant.destroy
        head :no_content
    end

    private 

    def find_applicant
        Applicant.find(params[:id])
    end

    def applicant_params
        params.permit(:id, :username, :first_name, :last_name, :age, :date_of_birth, :email)
     end

    def render_not_found_response
        render json: {error: "applicant not found"}, status: :not_found
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors }, status: :unprocessable_entity
    end


end