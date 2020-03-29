Rails.application.routes.draw do
  root to: 'dashboard#index'

  namespace :api do
    resources :locations
    resources :search, only: [:index]
  end
end
