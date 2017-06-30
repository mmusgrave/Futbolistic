# == Schema Information
#
# Table name: subscriptions
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  topic_id   :integer          not null
#  created_at :datetime
#  updated_at :datetime
#

class Subscription < ActiveRecord::Base
  validates :topic_id, :user_id, presence: true

  belongs_to :topic,
    class_name: "Topic",
    foreign_key: :topic_id,
    primary_key: :id

  belongs_to :subscriber,
    class_name: "User",
    foreign_key: :user_id,
    primary_key: :id

  # has_many  :child_topics,
  #   class_name: "Topic",
  #   foreign_key: :parent_topic_id,
  #   primary_key: :id

end
