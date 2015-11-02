class User
  include Mongoid::Document

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  field :vk_id,        type: String, default: ""
  field :token,        type: String, default: ""
  field :first_name,   type: String, default: ""
  field :last_name,    type: String, default: ""
  field :isBanned,     type: Boolean, default: false

  ## Database authenticatable
  field :email,              type: String, default: ""
  field :encrypted_password, type: String, default: ""

  ## Recoverable
  field :reset_password_token,   type: String
  field :reset_password_sent_at, type: Time

  ## Rememberable
  field :remember_created_at, type: Time

  ## Trackable
  field :sign_in_count,      type: Integer, default: 0
  field :current_sign_in_at, type: Time
  field :last_sign_in_at,    type: Time
  field :current_sign_in_ip, type: String
  field :last_sign_in_ip,    type: String

  def self.find_for_vkontakte_oauth vk_user
    if user = User.where(:vk_id => "id"+vk_user.user_id.to_s).first
      user
    else
      User.create!(:vk_id => "id"+vk_user.user_id.to_s, :token => vk_user.token, :email => vk_user.email, :password => Devise.friendly_token[0,20])
    end
  end
end
