class Api::SubscriptionsController < ApplicationController
  def index
    @subscriptions = Subscription.all
  end

  def show
    @subscription = Subscription.find(params[:id])
  end

  def create
    # 

    @subscription = Subscription.new(subscription_params.merge({ user_id: current_user.id }))

    if @subscription.save
      render :show
    else
      render json: @subscription.errors.messages, status: 422
    end
  end

  def destroy
    @subscription = Subscription.find(params[:id])

    if @subscription.destroy
      render :show
    else
      render json: @subscription.errors.messages, status: 422
    end
  end

  private

  def subscription_params
    params.require(:subscription).permit(:topic_id)
  end

end
