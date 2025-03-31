class Restaurant < ApplicationRecord
  has_many :dishes, dependent: :destroy

  validates :name, presence: true, uniqueness: true
  validates :cuisine, presence: true
  validates :img_url, presence: true
  validates :website, presence: true

  before_create do |restaurant|
    restaurant.slug = restaurant.name.parameterize
  end
end
