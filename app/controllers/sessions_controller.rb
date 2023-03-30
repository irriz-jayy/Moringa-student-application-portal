class SessionsController < ApplicationController

  skip_before_action :authorize, only: [:login, :logout]

  def login 
     applicant = Applicant.find_by(username: params[:username] )
     if(applicant && applicant.authenticate(params[:password]))
       session[:applicant_id] = applicant.id
       render json: { status: :created, loggedin: true, applicant: applicant}

     else
       render json: {errors: ["Wrong username or password"]}, status: :unauthorized
     end
  end


  #logout
  def logout
     session.delete :user_id
     head :no_content
  end

    # def create
    #   applicant = Applicant.find_by(username: params[:username])
    #   session[:applicant_id] = applicant.id
    #   render json: applicant
    # end
  
  
    # def destroy
    #   session.delete :applicant_id
    #   head :no_content
    # end
  end