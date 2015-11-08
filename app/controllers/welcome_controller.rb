class WelcomeController < ApplicationController
  def index
    @error = session[:error]
    session.delete(:error)
  end

  def auth_by_vk
    session[:state] = Digest::MD5.hexdigest(rand.to_s)
    redirect_to VkontakteApi.authorization_url(scope: [:first_name, :last_name], state: session[:state])
  end

  def vk_auth_callback
      @vk = VkontakteApi.authorize(code: params[:code])
      @user = User.find_for_vkontakte_oauth @vk
      if @user.persisted?
        if @user.is_banned
          session[:error] = 'Ваш аккаунт добавлен в черный список'
          redirect_to root_path
        else
          sign_in @user
          redirect_to root_path
        end

      else
        flash[:notice] = "authentication error"
        redirect_to root_path
      end
  end

  def current_user_id
    render json: {:current_user_id => current_user.present? ? current_user.id: nil}
  end

end
