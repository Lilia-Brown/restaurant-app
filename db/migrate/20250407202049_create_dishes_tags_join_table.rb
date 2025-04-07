class CreateDishesTagsJoinTable < ActiveRecord::Migration[8.0]
  def change
    create_table :dishes_tags, id: false do |t|
      t.belongs_to :dish, null: false, foreign_key: true
      t.belongs_to :tag, null: false, foreign_key: true
    end

    add_index :dishes_tags, [ :dish_id, :tag_id ], unique: true
  end
end
