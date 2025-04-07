class Dish < ApplicationRecord
  belongs_to :restaurant
  has_and_belongs_to_many :tags, join_table: "dishes_tags"

  validates :name, presence: true, uniqueness: { scope: :restaurant_id }
  validates :img_url, presence: true
  validates :description, presence: true

  validates_associated :tags
end
