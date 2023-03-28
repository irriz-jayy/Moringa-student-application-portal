class CoursesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response


    def index
        course = Course.all
        render json:course, except: [:created_at, :updated_at]
    end

    def show
        course = find_course
        render json: course, except: [:created_at, :updated_at], status: :ok    
    end
    
    def create
        course = Course.create!(course_params)
        render json: course, status: :ok
    end
     
    def destroy
        course = find_course
        course.destroy
        head :no_content
    end

    def update
        course = find_course
        course.update!(course_params)
        render json: course, except: [:created_at, :updated_at], status: :created
    end

    private 

    def find_course
        course.find(params[:id])
    end

    def course_params
        params.permit(:id, :name, :description)
     end

    def render_not_found_response
        render json: {error: "course not found"}, status: :not_found
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors }, status: :unprocessable_entity
     end

end
