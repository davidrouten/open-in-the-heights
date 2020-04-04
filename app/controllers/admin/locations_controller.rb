class Admin::LocationsController < Admin::ApplicationController
  before_action :set_location, only: [:show, :edit, :update, :destroy]

  # GET /locations
  # GET /locations.json
  def index
    @locations = Location.all
  end

  # GET /locations/1
  # GET /locations/1.json
  def show
  end

  # GET /locations/new
  def new
    @location = Location.new
  end

  # GET /locations/1/edit
  def edit
  end

  # POST /locations
  # POST /locations.json
  def create
    @location = Location.new(location_params)

    respond_to do |format|
      if @location.save
        format.html { redirect_to [:admin, @location], notice: 'Location was successfully created.' }
      else
        format.html { render :new }
      end
    end
  end

  # PATCH/PUT /locations/1
  # PATCH/PUT /locations/1.json
  def update
    respond_to do |format|
      if @location.update(location_params)
        format.html { redirect_to [:admin, @location], notice: 'Location was successfully updated.' }
      else
        format.html { render :edit }
      end
    end
  end

  # DELETE /locations/1
  # DELETE /locations/1.json
  def destroy
    @location.destroy
    respond_to do |format|
      format.html { redirect_to admin_locations_url, notice: 'Location was successfully destroyed.' }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_location
      @location = Location.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def location_params
      params.require(:location).permit(
        :name,
        :contact_name,
        :contact_email,
        :contact_phone,
        :contact_fax,
        :link_facebook,
        :link_twitter,
        :link_instagram,
        :link_website,
        :link_menu,
        :address_lat,
        :address_lng,
        :address_street,
        :address_street2,
        :address_city,
        :address_state,
        :address_zip,
        :drive_through_drive_up,
        :takeout,
        :delivery
      )
    end
end
