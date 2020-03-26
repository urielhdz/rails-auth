Rails.application.routes.draw do
  patch 'users_otp/enable'
  get 'users_otp/disable'
  devise_for :users, controllers: {
    sessions: "sessions"
  }
  root "main#home"
end
