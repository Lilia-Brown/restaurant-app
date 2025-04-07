class Tag < ApplicationRecord
  has_and_belongs_to_many :dishes, join_table: "dishes_tags"

  validates :name, presence: true, uniqueness: true
  validates_associated :dishes
end
