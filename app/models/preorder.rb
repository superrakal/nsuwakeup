class Preorder
  include Mongoid::Document
  include Mongoid::Timestamps

  field                     :user_vk_id
  field                     :comments
  field                     :status, default: 'Создан'
  belongs_to                :drink
  has_and_belongs_to_many   :syurups
  belongs_to :user

end
