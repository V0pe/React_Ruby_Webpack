class GreetingsController < ApplicationController
  # GET /greetings or /greetings.json
  def index
    @greetings = Greeting.all
  end

  def random
    render json: Greeting.random_message
  end
end
