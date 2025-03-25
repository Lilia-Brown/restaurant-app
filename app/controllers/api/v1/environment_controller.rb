module Api
  module V1
    class EnvironmentController < ApiController
      # Only allow GET requests
      before_action :verify_request_method

      def index
        # Only expose specific environment variables that are safe for frontend use
        render json: {
          environment: Rails.env,
          public_env_vars: {
            google_maps_api_key: ENV["GOOGLE_MAPS_API_KEY"]
          }
        }
      end

      private

      def verify_request_method
        head :method_not_allowed unless request.get?
      end
    end
  end
end
