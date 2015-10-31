require 'rails_helper'

RSpec.describe PreorderController, :type => :controller do

  describe "GET coffee" do
    it "returns http success" do
      get :coffee
      expect(response).to be_success
    end
  end

  describe "GET syrup" do
    it "returns http success" do
      get :syrup
      expect(response).to be_success
    end
  end

  describe "GET confirm" do
    it "returns http success" do
      get :confirm
      expect(response).to be_success
    end
  end

end
