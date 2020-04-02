class Api::LocationsController < ApplicationController
  def index
    render json: Location.open.visible
  end

  def show
    render json: Location.find(params[:id])
  end
end
