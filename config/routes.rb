Rails.application.routes.draw do
  resources :courses, only: [:index, :show, :update]
  resources :applications, only: [:index, :show, :update]
  resources :applicants, only: [:index, :show, :create, :update, :destroy]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
