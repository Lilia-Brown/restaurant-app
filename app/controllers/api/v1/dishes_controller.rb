module Api
  module V1
    class DishesController < ApiController
      protect_from_forgery with: :null_session

      def create
        dish = Dish.new(dish_params)

        if dish.save
          render json: DishSerializer.new(dish).serialized_json
        else
          render json: { error: dish.errors.messages }, status: 422
        end
      end

      def update
        dish = Dish.find(params[:id])

        if dish.update(dish_params)
          render json: DishSerializer.new(dish).serialized_json
        else
          render json: { error: dish.errors.messages }, status: 422
        end
      end

      def destroy
        dish = Dish.find(params[:id])

        if dish.destroy
          head :no_content
        else
          render json: { error: dish.errors.messages }, status: 422
        end
      end

      private

      def dish_params
        params.require(:dish).permit(:name, :description, :img_url, :restaurant_id)
      end
    end
  end
end
