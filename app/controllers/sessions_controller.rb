class SessionsController < ApplicationController
    def create
      applicant = Applicant.find_by(username: params[:username])
      session[:applicant_session_id] = applicant.id
      render json: applicant
    end
  
  
    def destroy
      session.delete :applicant_session_id
      head :no_content
    end
  end