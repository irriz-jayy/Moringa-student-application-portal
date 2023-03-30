class SessionsController < ApplicationController

  skip_before_action :authorize, only: [:create]

  # Login
  def create
     applicant = Applicant.find_by(username: params[:username] )
     if(applicant && applicant.authenticate(params[:password]))
       session[:applicant_id] = applicant.id
       render json: applicant, status: :accepted

     else
       render json: {errors: ["Wrong username or password"]}, status: :unauthorized
     end
  end

  # Logout
  def destroy
     session.delete :applicant_id
     head :no_content
  end

  end