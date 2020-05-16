Rails.application.routes.draw do
  get 'interviews/index'

  root 'interviews#index'

  resources :interviews
  resources :participants
    # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
