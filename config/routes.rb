

Rails.application.routes.draw do
  resources :admins, only: [:index]
  resources :applications
  resources :courses
  resources :applicants


  post "/login", to: "sessions#create"
  get "/me", to: "applicants#show"
  delete "/logout", to: "sessions#destroy"

  # post '/signup', to: 'applicants#signup'
  # post '/login', to: 'applicants#login'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end