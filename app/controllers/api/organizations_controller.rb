class Api::OrganizationsController < ApplicationController
  before_action :set_organization, only: [:show, :update, :destroy]

  def index
    render json: Organization.all
  end

  def show
    render json: @organization
  end

  def create
    render json: Organization.create(organization_params)
  end

  def update
    @organization.update_attributes(organization_params)
    render json: @organization
  end

  def destroy
    @organization.destroy
  end

  
  private 
  def set_organization
    @organization = Organization.find(params[:id])
  end

  def organization_params
    params.require(:organization).permit(:name, :contact_phone, :contact_email, :zipcode)
  end 
end