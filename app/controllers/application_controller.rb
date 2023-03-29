class ApplicationController < ActionController::API
  include ActionController::Cookies
  before_action :authorize

  # private functions
  private
  def authorize
     applicant = Applicant.find_by(id: session[:applicant_id] )  
     render json: {error: ["Not authorized"]}, status: :unauthorized unless applicant
  end
end
