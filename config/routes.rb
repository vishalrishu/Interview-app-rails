Rails.application.routes.draw do
  get 'interviews/index'

  root 'interviews#index'
  require 'sidekiq/web'
  mount Sidekiq::Web => '/sidekiq'
  resources :interviews
  resources :participants
    # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
