class Api::ItemsController < ApplicationController
  def index
    pet = Pet.find(params[:pet_id])
    render json: pet.items
  end

  def create
    Item = Pet.find(params[:pet_id])
    render json: pet.items.create(item_params)
  end

  def show
    pet = Pet.find(params[:pet_id])
    render json: pet.items.find(params[:id])
  end 

  def update
    pet = Pet.find(params[:pet_id])
    item = pet.items.find(params[:id])
    item.update_attributes(item_params)
    render json: pet.items.find(params[:id])
  end

  def destroy
    item.find(params[:id]).destroy
  end

  private 
  def item_params
    params.require(:item).permit(:name, :qty, :category, :pet_id)
  end 