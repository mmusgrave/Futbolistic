Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
   resource :user, only: [:create]
   resource :session, only: [:create, :destroy, :show]
   resources :stories, only: [:create, :destroy, :update, :show]
 end

  root "static_pages#root"
end
