class Api::SearchController < ApplicationController
  def index
    locations = params[:term].blank? ? Location.all : Location.where("LOWER(name) ILIKE ?", "%#{params[:term].to_s}%")

    if params[:business_type]
      locations = locations.where(business_type: URI.decode(params[:business_type])) if params[:business_type]
    end

    render json: locations.order(name: :asc)
  end
end
