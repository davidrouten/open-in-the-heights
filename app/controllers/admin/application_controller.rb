module Admin
  class ApplicationController < ApplicationController
    layout 'admin'
    before_action :authenticate_user!
    before_action :authenticate_admin!

    private

    def authenticate_admin!
      redirect_to root_path unless current_user.is_admin?
      false
    end
  end
end