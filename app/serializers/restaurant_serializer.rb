class RestaurantSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :cuisine, :img_url, :website, :address, :slug
end
