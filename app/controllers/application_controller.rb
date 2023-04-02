class ApplicationController < ActionController::API
  before_action :authorize
   wrap_parameters format: []


   include ActionController::Cookies
   rescue_from ActiveRecord::RecordNotFound, with: :response_not_found
   rescue_from ActiveRecord::RecordInvalid, with: :unprocessable_entity_response



   private

   def response_not_found
     render json: {error: "#{controller_name.classify} not found"}, status: :not_found
   end

   def unprocessable_entity_response(invalid)
     render json: { errors: invalid.record.errors}, status: :unprocessable_entity
   end

   def authorize
      @current_applicant = Applicant.find_by(id: session[:applicant_id])
      render json: {error: ["Not authorized"]}, status: :unauthorized unless @current_applicant
   end

end
