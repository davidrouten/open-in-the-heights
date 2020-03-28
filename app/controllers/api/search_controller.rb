class Api::SearchController < ApplicationController
  def show
    render json: {term: params[:id]}
  end
end
