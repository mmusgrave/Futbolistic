Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
   resources :users, only: [:create, :show]
   resource :session, only: [:index, :create, :destroy, :show]
   resources :comments
   resources :stories, only: [:index, :create, :destroy, :update, :show]
   resources :topics, only: [:index, :show, :create]
  #  resources :stories, except: [:edit, :new]
 end

  root "static_pages#root"
end
