class PreorderSerializer < ActiveModel::Serializer
  attributes :id, :drink_id, :syurup_ids, :comments
end
