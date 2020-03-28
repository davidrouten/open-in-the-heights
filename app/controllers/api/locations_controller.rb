class Api::LocationsController < ApplicationController
  def index
    render json: [
      {name: 'test', coords: {lat: 28.0020, lng: -82.4558}},
      {name: 'Ellas', coords: {lat: 27.9935829, lng: -82.4531083}},
    ]
  end
end
