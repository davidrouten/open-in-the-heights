Rails.application.routes.draw do
  devise_for :users
  root to: 'dashboard#index'

  namespace :admin do
    resources :dashboard, only: [:index]
    resources :locations
  end

  namespace :api do
    resources :locations
    resources :search, only: [:index]
  end
end
