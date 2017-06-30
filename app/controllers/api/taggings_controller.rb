class Api::TaggingsController < ApplicationController
  def index
    @taggings = Tagging.all
  end

  def show
    @tagging = Tagging.find(params[:id])
  end

  def create
    # debugger

    @tagging = Tagging.new(tagging_params)

    if @tagging.save
      render :show
    else
      render json: @tagging.errors.messages, status: 422
    end
  end

  def destroy
    @tagging = Tagging.find(params[:id])

    if @tagging.destroy
      render :show
    else
      render json: @tagging.errors.messages, status: 422
    end
  end

  private

  def tagging_params
    params.require(:tagging).permit(:topic_id, :story_id)
  end
end
