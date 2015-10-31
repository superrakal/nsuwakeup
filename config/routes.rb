Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do
      resources :drinks, except:[:destroy]
      resources :syurups, except:[:destroy]
      resources :preorders, except:[:destroy]  do
        get  'new', on: :collection
      end
    end
  end

  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  devise_for :users, :controllers => { :omniauth_callbacks => "users/omniauth_callbacks" }
  root 'welcome#index'
end
