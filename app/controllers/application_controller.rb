class ApplicationController < ActionController::Base
  add_flash_types :alert, :another_custom_type
  protect_from_forgery with: :null_session
end
