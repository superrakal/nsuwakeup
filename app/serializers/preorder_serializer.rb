class PreorderSerializer < ActiveModel::Serializer
  attributes :id, :drink_id, :syurup_ids, :comments, :created_at, :status
end
