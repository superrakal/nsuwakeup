require 'autoinc'

class Preorder
  include Mongoid::Document
  include Mongoid::Timestamps
  include Mongoid::Autoinc

  field                     :user_vk_id
  field                     :comments
  field                     :status, default: 'Создан'
  field                     :number, type: Integer

  belongs_to                :drink
  belongs_to                :user
  has_and_belongs_to_many   :syurups

  increments :number, model_name: 'Preorder'
  index number: 1

  validates_uniqueness_of :number
end
