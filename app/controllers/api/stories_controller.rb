class Api::StoriesController < ApplicationController
  def index
    @stories = Story.all
  end

  def show
    @story = Story.find(params[:id])
  end

  def create
    # debugger

    @story = Story.new(story_params.merge({ author_id: current_user.id }))

    if @story.save
      render :show
    else
      render json: @story.errors.messages, status: 422
    end
  end

  def update
    @story = Story.find(params[:id])

    if @story.update(story_params)
      render :show
    else
      render json: @story.errors.messages, status: 422
    end
  end

  def destroy
    @story = Story.find(params[:id])

    if @story.destroy
      render :show
    else
      render json: @story.errors.messages, status: 422
    end
  end

  private

  def story_params
    params.require(:story).permit(:title, :body)
  end

end
