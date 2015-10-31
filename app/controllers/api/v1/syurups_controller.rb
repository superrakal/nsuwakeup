module Api
  module V1
    class SyurupsController < ApplicationController

      respond_to :json

      def index
        @syurups = Syurup.all
        respond_with @syurups
      end

      def show
        @syurup  = Syurup.find params[:id]
        respond_with @syurup
      end

    end
  end
end

