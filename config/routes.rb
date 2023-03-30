

Rails.application.routes.draw do
  resources :admins, only: [:index]
  resources :applications
  resources :courses

  # Applicants Routes
  resources :applicants
  #   GET /me for fetching the currently logged in user
  get "/me", to: "applicants#show"

  # Sessions Routes
  #   POST /login for logging in
  post "/login", to: "sessions#create"
  #   DELETE /logout for logging out
  delete "/logout", to: "sessions#destroy"

  # post '/signup', to: 'applicants#signup'
  # post '/login', to: 'applicants#login'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end