class Api::SearchController < ApplicationController
  def index
    render json: Location.where("LOWER(name) ILIKE ?", "%#{params[:term].to_s}%")
  end
end
