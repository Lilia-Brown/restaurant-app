class CreateDishes < ActiveRecord::Migration[8.0]
  def change
    create_table :dishes do |t|
      t.string :name
      t.string :img_url
      t.string :description
      t.belongs_to :restaurant, null: false, foreign_key: true

      t.timestamps
    end
  end
end
