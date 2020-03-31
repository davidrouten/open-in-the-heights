class Api::SearchController < ApplicationController
  def index
    render json: params[:term].blank? ? Location.all : Location.where("LOWER(name) ILIKE ?", "%#{params[:term].to_s}%")
  end
end
