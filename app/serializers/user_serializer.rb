class UserSerializer < ActiveModel::Serializer
  attributes :id, :vk_screen_name, :first_name, :last_name, :vk_photo, :preorder_ids, :is_admin

  def preorder_ids
    Preorder.where(user: scope, :status.ne => 'Создан').distinct(:id)
  end
end
