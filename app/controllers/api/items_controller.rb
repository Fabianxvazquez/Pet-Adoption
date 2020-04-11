class Api::ItemsController < ApplicationController
  before_action :set_pet 
  def index
    render json: @pet.items
  end

  def create
    item = @pet.items.new(item_params)
    if item.save
      render json: item
    else
      render json: @pet.item.errors, status: 422
    end
  end

  def show
    render json: @pet.items.find(params[:id])
  end 

  def update
    item = @pet.items.find(params[:id])
    item.update_attributes(item_params)
    render json: @pet.items.find(params[:id])
  end

  def destroy
    item.find(params[:id]).destroy
  end

  private 
  def set_pet
    @pet = Pet.find(params[:pet_id])
  end
  def item_params
    params.require(:item).permit(:name, :qty, :category)
  end 
end