class Api::CommentsController < ApplicationController
  def index
    @comments = Comment.all
  end
  #
  def show
    @comment = Comment.find(params[:id])
  end
  #
  def create
    # 

    @comment = Comment.new(comment_params.merge({ author_id: current_user.id }))

    if @comment.save
      render :show
    else
      render json: @comment.errors.messages, status: 422
    end
  end

  def update
    @comment = Comment.find(params[:id])

    if @comment.update(comment_params)
      render :show
    else
      render json: @comment.errors.messages, status: 422
    end
  end
  #
  def destroy
    @comment = Comment.find(params[:id])

    if @comment.destroy
      render :show
    else
      render json: @comment.errors.messages, status: 422
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:body, :story_id)
    #take author_id from currentUser on frontend
  end
end
