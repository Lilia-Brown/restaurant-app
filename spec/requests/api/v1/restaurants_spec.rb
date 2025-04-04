require 'rails_helper'

RSpec.describe 'Restaurants', type: :request do
  let(:restaurant_path) { '/api/v1/restaurants' }
  let(:restaurant_params) do
    {
      name: 'Restaurant Name',
      slug: 'restaurant-name',
      cuisine: 'Italian',
      img_url: 'https://placecats.com/300/200',
      website: 'http://restaurant-name.com',
      address: '123 Fake Street'
    }
  end
  let!(:restaurant) { Restaurant.create(restaurant_params) }
  let(:expected_attributes) do
    {
      "attributes" => a_hash_including(
        "name" => restaurant_params[:name],
        "address" => restaurant_params[:address],
        "cuisine" => restaurant_params[:cuisine],
        "img_url" => restaurant_params[:img_url],
        "slug" => restaurant_params[:slug],
        "website" => restaurant_params[:website]
      )
    }
  end

  describe 'index: request list of all restaurants' do
    it 'should get the expected response data' do
      get restaurant_path

      expect(response).to have_http_status(:ok)
      parsed_response = JSON.parse(response.body)
      expect(parsed_response["data"]).to be_an(Array)
      expect(parsed_response["data"]).to all(include(expected_attributes))
    end
  end

  describe 'show: request a particular restaurant with its dishes' do
    let!(:restaurant) { create(:restaurant, slug: 'test-restaurant') }
    let!(:dishes) do
      [
        create(:dish, name: 'Dish 1', img_url: 'https://placecats.com/100/100', description: 'Delicious dish 1', restaurant: restaurant),
        create(:dish, name: 'Dish 2', img_url: 'https://placecats.com/200/200', description: 'Delicious dish 2', restaurant: restaurant),
        create(:dish, name: 'Dish 3', img_url: 'https://placecats.com/300/300', description: 'Delicious dish 3', restaurant: restaurant)
      ]
    end

    it 'returns the restaurant with its associated dishes' do
      get "/api/v1/restaurants/#{restaurant.slug}"

      expect(response).to have_http_status(:ok)
      json_response = JSON.parse(response.body)

      # Check restaurant data
      expect(json_response['data']['attributes']['name']).to eq(restaurant.name)

      # Check included dishes
      included_dishes = json_response['included'].select { |item| item['type'] == 'dish' }
      expect(included_dishes.size).to eq(3)
      included_dishes.each_with_index do |dish, index|
        expect(dish['attributes']['name']).to eq(dishes[index].name)
        expect(dish['attributes']['img_url']).to eq(dishes[index].img_url)
        expect(dish['attributes']['description']).to eq(dishes[index].description)
      end
    end
  end

  describe 'update: update a particular restaurant' do
    let(:updated_params) do
      {
        name: 'Updated Restaurant Name',
        address: '456 New Address',
        cuisine: 'Mexican',
        img_url: 'https://placecats.com/400/300',
        website: 'http://updated-restaurant.com'
      }
    end

    it 'should update the restaurant and return the updated response data' do
      put "#{restaurant_path}/#{restaurant_params[:slug]}", params: { restaurant: updated_params }

      expect(response).to have_http_status(:ok)
      parsed_response = JSON.parse(response.body)
      expect(parsed_response["data"]).to be_a(Hash)
      expect(parsed_response["data"]).to include(
        "attributes" => a_hash_including(
          "name" => updated_params[:name],
          "address" => updated_params[:address],
          "cuisine" => updated_params[:cuisine],
          "img_url" => updated_params[:img_url],
          "website" => updated_params[:website]
        )
      )
    end
  end

  describe 'create: create a new restaurant' do
    let(:new_restaurant_params) do
      {
        name: 'New Restaurant',
        slug: 'new-restaurant',
        cuisine: 'French',
        img_url: 'https://placecats.com/500/400',
        website: 'http://new-restaurant.com',
        address: '789 Another Street'
      }
    end

    it 'should create a new restaurant and return the created response data' do
      post restaurant_path, params: { restaurant: new_restaurant_params }

      expect(response).to have_http_status(:ok)
      parsed_response = JSON.parse(response.body)
      expect(parsed_response["data"]).to be_a(Hash)
      expect(parsed_response["data"]).to include(
        "attributes" => a_hash_including(
          "name" => new_restaurant_params[:name],
          "address" => new_restaurant_params[:address],
          "cuisine" => new_restaurant_params[:cuisine],
          "img_url" => new_restaurant_params[:img_url],
          "slug" => new_restaurant_params[:slug],
          "website" => new_restaurant_params[:website]
        )
      )
    end
  end

  describe 'destroy: deleting a particular restaurant' do
    it 'should delete the restaurant and return no content' do
      delete "#{restaurant_path}/#{restaurant_params[:slug]}"

      expect(response).to have_http_status(:no_content)
      expect(Restaurant.find_by(slug: restaurant_params[:slug])).to be_nil
    end
  end
end
