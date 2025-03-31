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
  { name: 'Spaghetti and Meatballs', img_url: 'https://s3-media0.fl.yelpcdn.com/bphoto/6EAFfyTxbJf7287PyOXq2Q/348s.jpg', description: 'Classic marinara sauce, 3 big meatballs and fresh Parmesan topped with Italian parsley', restaurant_id: 1 },
  { name: 'Momo Spicy Noodle', img_url: 'https://static.wixstatic.com/media/9e691e_9d4dee59adf3405fb601daa6cdb85131~mv2_d_3000_2000_s_2.jpg/v1/fill/w_1456,h_1434,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/9e691e_9d4dee59adf3405fb601daa6cdb85131~mv2_d_3000_2000_s_2.jpg', description: 'An absolute favorite in the Szechwan region, MOMO Spicy Noodle will win you over with its perfect balance of spicy and rich flavors. This meal is a variation on a long-standing secret family recipe, and it is a must-try for those who love their noodles with an extra kick! Feel free to make it even tastier with our proteins: spicy pork, slow-cooked rice wine pork belly, spicy chicken or tofu!', restaurant_id: 2 },
  { name: "Chef's Mess", img_url: 'https://s3-media0.fl.yelpcdn.com/bphoto/20R0Ac8kUtRE-B0OXbCRnA/348s.jpg', description: '2 eggs scrambled w/spuds, bacon, cheese, mushrooms, tomato, sour cream, green onions, and choice of toast', restaurant_id: 3 },
  { name: 'Fried Chicken 4 Piece Dinner', img_url: 'https://s3-media0.fl.yelpcdn.com/bphoto/guZVdCZYy57D_ILOeYYRrA/o.jpg', description: 'Rocky Jr. free range chicken, garlic mashers, braised ham hock collards', restaurant_id: 4 }
])
