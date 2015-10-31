module Api
  module V1
    class PreordersController < ApplicationController

      respond_to :json

      def index
        @preorders = Preorder.all
        respond_with @preorders
      end

      def show
        @preorder  = Preorder.find params[:id]
        respond_with @preorder
      end

      def new
        @preorder = Preorder.find params[:id]
        PreorderMailer.new_preorder(@preorder).deliver
        respond_with @preorder, status: 200
      end

      def create
        @preorder = Preorder.new preorder_params
        if @preorder.save
          respond_with @preorder, status: :created, location: false
        else
          respond_with @preorder, status: :unprocessable_entity
        end
      end

      def update
        @preorder = Preorder.find params[:id]
        if @preorder.update preorder_params
          if preorder_params[:syurup_ids] == nil
            @preorder.syurup_ids = []
            @preorder.save
          end
          respond_with @preorder, status: :created, location: false
        else
          respond_with @preorder, status: :unprocessable_entity
        end
      end

      private
        def preorder_params
          params.require(:preorder).permit :drink_id, {syurup_ids: []}
        end
    end
  end
end
