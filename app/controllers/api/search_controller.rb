class Api::SearchController < ApplicationController
  def index
    locations = Location.open.visible.order(name: :asc)

    if params[:term].present?
      term = URI.decode(params[:term].to_s)
      locations = locations.where("LOWER(name) ILIKE ?", "%#{term}%")
                           .or(locations.where("LOWER(notes) ILIKE ?", "%#{term}%"))
                           .or(locations.where("LOWER(delivery_notes) ILIKE ?", "%#{term}%"))
                           .or(locations.where("LOWER(address_street) ILIKE ?", "%#{term}%"))
                           .or(locations.where("LOWER(address_zip) ILIKE ?", "%#{term}%"))

    end

    if params[:business_type].present?
      locations = locations.where(business_type: URI.decode(params[:business_type])) if params[:business_type]
    end

    render json: locations
  end
end
