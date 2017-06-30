class Api::TopicsController < ApplicationController
    def index
      @topics = Topic.all
    end

    def show
      # debugger
      @topic = Topic.find(params[:id])
    end

    def create
      # debugger

      @topic = Topic.new(topic_params)

      if @topic.save
        render :show
      else
        render json: @topic.errors.messages, status: 422
      end
    end


    private

    def topic_params
      params.require(:topic).permit(:topic_name, :parent_topic_id)
    end

end
