class CoursesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    # rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    wrap_parameters format: []

    def index
        course = Course.all
        render json:course, except: [:created_at, :updated_at]
    end

    def show
        course = find_course
        render json: course, except: [:created_at, :updated_at], status: :ok    
    end
    
     

    private 

    def find_course
        Course.find(params[:id])
    end

    def render_not_found_response
        render json: {error: "course not found"}, status: :not_found
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors }, status: :unprocessable_entity
     end

end