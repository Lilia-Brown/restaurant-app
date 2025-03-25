require 'rails_helper'

RSpec.describe 'Environment', type: :request do
  let(:environment_path) { '/api/v1/environments' }

  describe 'GET /api/v1/environment' do
    it 'returns environment variables' do
      stub_const('ENV', ENV.to_hash.merge('GOOGLE_MAPS_API_KEY' => 'test_api_key'))

      get '/api/v1/environment'

      expect(response).to have_http_status(:success)
      json_response = JSON.parse(response.body)
      expect(json_response['environment']).to eq('test')
      expect(json_response['public_env_vars']['google_maps_api_key']).to eq('test_api_key')
    end
  end
end
