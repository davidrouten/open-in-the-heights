class Api::SearchController < ApplicationController
  def index
    locations = Location.is_visible.order(name: :asc)

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

    if params[:drive_through_drive_up].present?
      locations = locations.where(drive_through_drive_up: true)
    end

    if params[:takeout].present?
      locations = locations.where(takeout: true)
    end

    if params[:delivery].present?
      locations = locations.where(delivery: true)
    end

    render json: locations
  end
end
