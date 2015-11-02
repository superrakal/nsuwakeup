class SyurupSerializer < ActiveModel::Serializer
  attributes :id, :name, :is_available, :image

  def image
    @object.image.url
  end
end
