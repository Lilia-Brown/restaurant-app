# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end
restaurants = Restaurant.create([
  { name: 'Emmys Spaghetti Shack', cuisine: 'Italian', img_url: 'https://i.pinimg.com/736x/a8/b7/a8/a8b7a825fca5924744a6349237975cbf.jpg', website: 'https://sfspaghettishack.com/' },
  { name: 'Momo Noodles', cuisine: 'Chinese', img_url: 'https://static.wixstatic.com/media/9e691e_e92f18097a8e486cb49e8e4e738ce60b~mv2_d_5334_5334_s_4_2.png/v1/fit/w_2500,h_1330,al_c/9e691e_e92f18097a8e486cb49e8e4e738ce60b~mv2_d_5334_5334_s_4_2.png', website: 'https://www.momonoodle.com/' },
  { name: 'St. Francis Fountain', cuisine: 'American Diner', img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3kIvFh4z5RESUmUq0cEUoNGAhcdcOfiqJcg&s', website: 'https://www.instagram.com/stfrancisfountainsf/' },
  { name: 'The Front Porch', cuisine: 'Southern', img_url: 'https://static.wixstatic.com/media/2c5f5a_1122ecabc78648528d2d5a39739b1138~mv2.png/v1/fill/w_400,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Front%20Porch%20logo%20NO%20BKGND%20%20copy_edited_p.png', website: 'https://www.thefrontporchsf.com/' }
])

dishes = Dish.create([
  { name: 'Spaghetti and Meatballs', img_url: 'https://www.simplyrecipes.com/thmb/0c5a1b7e2f4b4a0c8e6d3f3c7e1e2b8d/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Spaghetti-and-Meatballs-LEAD-2-72a0f6b1e2f04d4a8c5a1b7e2f4b4a0c8e6d3f3c7e1e2b8d.jpg', description: 'Classic spaghetti with homemade meatballs', restaurant_id: 1 },
  { name: 'Dan Dan Noodles', img_url: 'https://www.daringgourmet.com/wp-content/uploads/2018/09/Dan-Dan-Noodles-1-500x375.jpg', description: 'Spicy Sichuan noodles with ground pork', restaurant_id: 2 },
  { name: 'Pancakes', img_url: 'https://www.thespruceeats.com/thmb/1a8a0b7c6f4b4a0c8e6d3f3c7e1e2b8d/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/pancakes-58b1e5a03df78c4758f6a2d9.jpg', description: 'Fluffy pancakes with maple syrup', restaurant_id: 3 },
  { name: 'Fried Chicken', img_url: 'https://www.seriouseats.com/thmb/1a8a0b7c6f4b4a0c8e6d3f3c7e1e2b8d/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/pancakes-58b1e5a03df78c4758f6a2d9.jpg', description: 'Crispy fried chicken with a side of waffles', restaurant_id: 4 }
])
