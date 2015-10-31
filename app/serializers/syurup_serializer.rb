class SyurupSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :is_available, :image

  def image
    @object.image.url
  end
end
