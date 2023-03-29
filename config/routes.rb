Rails.application.routes.draw do
  resources :sessions, only: [:login, :logout]
  resources :courses, only: [:index, :show]
  resources :applications, only: [:index, :show, :create, :update, :destroy]
  resources :applicants, only: [:index, :show, :create, :update, :destroy, :loggedin]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
