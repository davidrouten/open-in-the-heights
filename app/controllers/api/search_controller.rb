class Api::SearchController < ApplicationController
  def index
    locations = params[:term].blank? ? Location.all : Location.where("LOWER(name) ILIKE ?", "%#{params[:term].to_s}%")
    render json: locations.order(name: :asc)
  end
end
