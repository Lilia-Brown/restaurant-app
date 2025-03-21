class CreateRestaurants < ActiveRecord::Migration[8.0]
  def change
    create_table :restaurants do |t|
      t.string :name
      t.string :cuisine
      t.string :website
      t.string :slug
      t.string :img_url
      t.string :address

      t.timestamps
    end
  end
end
