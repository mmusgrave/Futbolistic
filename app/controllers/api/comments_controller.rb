class Api::CommentsController < ApplicationController
  def index
    @comments = comment.all
  end
  #
  def show
    @comment = Comment.find(params[:id])
  end
  #
  def create
    # debugger

    @comment = Comment.new(comment_params.merge({ author_id: current_user.id }))

    if @comment.save
      render :show
    else
      render json: @comment.errors.messages, status: 422
    end
  end
  #
  # def update
  #   @story = Story.find(params[:id])
  #
  #   if @story.update(story_params)
  #     render :show
  #   else
  #     render json: @story.errors.messages, status: 422
  #   end
  # end
  #
  # def destroy
  #   @story = Story.find(params[:id])
  #
  #   if @story.destroy
  #     render :show
  #   else
  #     render json: @story.errors.messages, status: 422
  #   end
  # end

  private

  def comment_params
    params.require(:comment).permit(:body, :story_id)
    #take author_id from currentUser on frontend
  end
end
