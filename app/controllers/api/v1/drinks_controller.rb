module Api
  module V1
    class DrinksController < ApplicationController

      respond_to :json

      def index
        @drinks = Drink.order_by(name: 'asc')
        respond_with @drinks
      end

      def show
        @drink  = Drink.find params[:id]
        respond_with @drink
      end

    end
  end
end

