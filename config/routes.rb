Rails.application.routes.draw do
  root "greetings#index"
  get 'greeting', to: 'greetings#random'
end
