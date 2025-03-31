require 'rails_helper'

RSpec.describe Dish, type: :model do
  describe 'validations' do
    it 'should be invalid without name' do
      expect(build(:dish, name: nil)).to_not be_valid
    end

    it 'should be invalid without img_url' do
      expect(build(:dish, img_url: nil)).to_not be_valid
    end

    it 'should be invalid without description' do
      expect(build(:dish, description: nil)).to_not be_valid
    end
  end
end
