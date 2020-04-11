require 'test_helper'

class Api::PetsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_pets_index_url
    assert_response :success
  end

  test "should get show" do
    get api_pets_show_url
    assert_response :success
  end

  test "should get create" do
    get api_pets_create_url
    assert_response :success
  end

  test "should get update" do
    get api_pets_update_url
    assert_response :success
  end

end
