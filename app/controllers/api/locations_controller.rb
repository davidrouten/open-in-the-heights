class Api::LocationsController < ApplicationController
  require 'yaml'

  def index
    render json: Location.visible
  end
end
