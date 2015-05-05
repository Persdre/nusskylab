Rails.application.routes.draw do
  # homepage
  root 'home#index'

  # oauth handling
  post '/auth/:provider/callback' => 'sessions#create', :as => :oauth_callback
  get '/login' => 'sessions#new', :as => :login
  get '/logout' => 'sessions#destroy', :as => :logout
  get '/auth/failure' => 'sessions#failure', :as => :login_failure

  resources :users
  resources :students do
    collection do
      get 'batch_upload'
      post 'batch_create'
      post 'use_existing'
    end
  end
  resources :advisers do
    resources :peer_evaluations
    collection do
      post 'use_existing'
    end
  end
  resources :mentors do
    collection do
      post 'use_existing'
    end
  end
  resources :admins do
    collection do
      post 'use_existing'
    end
  end
  resources :teams do
    resources :submissions, only: [:index, :new, :create, :edit, :update, :show]
    resources :peer_evaluations
  end
  resources :evaluatings
  resources :milestones
end
