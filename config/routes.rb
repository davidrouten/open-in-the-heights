Rails.application.routes.draw do
  root to: 'dashboard#index'

  namespace :api do
    resources :locations, only: [:index]
    resources :search, only: [:show]
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
