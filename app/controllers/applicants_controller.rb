class ApplicantsController < ApplicationController

  skip_before_action :authorize, only: [:create, :show, :index, :destroy]

  def index
    render json: Applicant.all
  end

  def show
    applicant = Applicant.find_by(id: session[:applicant_id] ) 
    if(applicant)
        render json: applicant, status: :ok
    else
        render json: {loggedin: false}
    end    
  end

  def create 
    applicant = Applicant.create!(applicant_params)
    if applicant.valid?
        render json: { "success": "Applicant saved successfully!"}
    else
        render json: applicant.errors.messages
    end
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
      params.permit(:id, :username, :first_name, :last_name, :age, :date_of_birth, :email, :password)
   end
  
   def log_in_params
     params.permit(:username, :password)
   end
  
end