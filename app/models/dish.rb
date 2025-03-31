class Dish < ApplicationRecord
  belongs_to :restaurant

  validates :name, presence: true, uniqueness: { scope: :restaurant_id }
  validates :img_url, presence: true
  validates :description, presence: true
end
