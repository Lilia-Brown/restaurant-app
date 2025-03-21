FactoryBot.define do
  factory :restaurant do
    name { 'Testaurant' }
    cuisine { 'Italian' }
    website { 'www.testaurant.com' }
    slug { 'testaurant' }
    img_url { 'https://placecats.com/300/200' }
    address { '123 Test Street' }
  end
end
