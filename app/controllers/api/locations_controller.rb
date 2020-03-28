class Api::LocationsController < ApplicationController
  def index
    render json: Location.visible
  end
end
