require 'rails_helper'

RSpec.describe 'Dishes', type: :request do
  let(:dishes_path) { '/api/v1/dishes' }
  let!(:restaurant) { create(:restaurant) }
  let!(:tags) { Array.new(3) { |i| create(:tag, name: "Tag #{i + 1}") } }
  let!(:dish) do
    create(:dish, name: 'Test Dish', img_url: 'https://placecats.com/100/100', description: 'Test description', restaurant: restaurant, tags: tags)
  end

  describe 'index: request list of all dishes' do
    it 'should get the expected response data including tags' do
      get dishes_path

      expect(response).to have_http_status(:ok)
      parsed_response = JSON.parse(response.body)
      expect(parsed_response["data"]).to be_an(Array)
      expect(parsed_response["data"].first).to include(
        "attributes" => a_hash_including(
          "name" => dish.name,
          "img_url" => dish.img_url,
          "description" => dish.description
        )
      )

      # Check tags
      included_tags = parsed_response["included"]&.select { |item| item["type"] == "tag" } || []
      expect(included_tags.size).to eq(3)
      included_tags.each_with_index do |tag, index|
        expect(tag["attributes"]["name"]).to eq(tags[index].name)
      end
    end
  end

  describe 'create: create a new dish' do
    let(:new_dish_params) do
      {
        name: 'New Dish',
        img_url: 'https://placecats.com/200/200',
        description: 'New dish description',
        restaurant_id: restaurant.id
      }
    end

    it 'should create a new dish and return the created response data including tags' do
      post dishes_path, params: { dish: new_dish_params }

      expect(response).to have_http_status(:ok)
      parsed_response = JSON.parse(response.body)

      # Ensure the response contains the expected structure
      expect(parsed_response).to include("data" => a_hash_including("attributes" => a_hash_including("name" => new_dish_params[:name])))
    end
  end

  describe 'destroy: deleting a particular dish' do
    it 'should delete the dish and return no content' do
      delete "#{dishes_path}/#{dish.id}"

      expect(response).to have_http_status(:no_content)
      expect(Dish.find_by(id: dish.id)).to be_nil
    end
  end
end
