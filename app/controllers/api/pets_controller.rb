class Api::PetsController < ApplicationController
  
  def index
    organization = Organization.find(params[:organization_id])
    render json: organization.pets
  end

  def create
    organization = Organization.find(params[:organization_id])
    render json: organization.pets.create(pet_params)
  end

  def show
    organization = Organization.find(params[:organization_id])
    render json: organization.pets.find(params[:id])
  end 

  def update
    organization = Organization.find(params[:organization_id])
    pet = organization.pets.find(params[:id])
    pet.update_attributes(pet_params)
    render json: organization.pets.find(params[:id])
  end

  def destroy
    pet.find(params[:id]).destroy
  end

  private 

  def pet_params
    params.require(:pet).permit(:breed, :neutered, :species, :age, :image, :size, :sex, :organization_id)
  end 
end
