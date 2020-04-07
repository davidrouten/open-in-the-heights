class ApplicationController < ActionController::Base
  PREFERRED_HOST = ENV.fetch('PREFERRED_HOST', 'www.openintheheights.com')
  before_filter :redirect_to_prefered_host

  private

  def redirect_to_prefered_host
    if Rails.env.production? && request.host != PREFERRED_HOST
      redirect_to(host: PREFERRED_HOST)
    end
  end
end
