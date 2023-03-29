class SessionsController < ApplicationController
    skip_before_action :authorize, only: [:login]

    def login
        applicant = Applicant.find_by(username: params[:username])
        if(applicant && applicant.authorize(params[:password]))
            session[:applicant_id] = applicant.id
            render json: {status: :ok, loggedin: true, applicant: :applicant}
        else
            render json: {errors: ["Wrong username or password"]}, status: :unauthorized   
        end 
    end

    def logout
        session.delete :applicant_id
        head :no_content
    end
end
