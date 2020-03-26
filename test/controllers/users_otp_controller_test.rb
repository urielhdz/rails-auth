require 'test_helper'

class UsersOtpControllerTest < ActionDispatch::IntegrationTest
  test "should get enable" do
    get users_otp_enable_url
    assert_response :success
  end

  test "should get disable" do
    get users_otp_disable_url
    assert_response :success
  end

end
