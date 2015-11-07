Rails.application.routes.draw do

  devise_for :admins
  namespace :api do
    namespace :v1 do
      resources :users, only:[:show]
      resources :drinks, except:[:destroy]
      resources :syurups, except:[:destroy]
      resources :preorders, except:[:destroy]  do
        get  'new', on: :collection
      end
    end
  end

  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  devise_for :users
  get 'welcome/vk_auth_callback'
  get 'welcome/auth_by_vk'
  get 'welcome/current_user_id'
  root 'welcome#index'
  get '/*path' => 'welcome#index', format: 'html'
end
