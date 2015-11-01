class Preorder
  include Mongoid::Document

  field                     :user_vk_id
  field                     :comments
  belongs_to                :drink
  has_and_belongs_to_many   :syurups
end
