Rails.application.routes.draw do
  require 'sidekiq/web'
  mount Sidekiq::Web => '/sidekiq'
  resources :interviews
  resources :participants
  get '/home' => 'interviews#home'
  get '/interviews/new' => 'interviews#new'
  get '/interviews/:id' => 'interviews#show'
  get '/interviews/:id/edit' => 'interviews#edit'
  root to: 'interviews#index'

    # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
