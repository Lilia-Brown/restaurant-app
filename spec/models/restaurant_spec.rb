require 'rails_helper'

RSpec.describe Restaurant, type: :model do
  describe 'validations' do
    it 'should be invalid without name' do
      expect(build(:restaurant, name: nil)).to_not be_valid
    end

    it 'should be invalid without cuisine' do
      expect(build(:restaurant, cuisine: nil)).to_not be_valid
    end

    it 'should be invalid without img_url' do
      expect(build(:restaurant, img_url: nil)).to_not be_valid
    end

    it 'should be invalid without website' do
      expect(build(:restaurant, website: nil)).to_not be_valid
    end

    it 'should be valid without address' do
      expect(build(:restaurant, address: nil)).to be_valid
    end
  end
end
