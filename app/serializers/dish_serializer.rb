class DishSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :img_url, :description, :restaurant_id
end
