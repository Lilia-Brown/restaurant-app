Rails.application.routes.draw do
  root "pages#home"

  namespace :api do
    namespace :v1 do
      resources :restaurants, param: :slug
      resources :dishes, only: %i[create destroy index show]

      # Environment variables endpoint
      get "environment", to: "environment#index"
    end
  end

  get "*path", to: "pages#home", via: :all
end
