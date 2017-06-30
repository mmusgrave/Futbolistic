# == Schema Information
#
# Table name: topics
#
#  id              :integer          not null, primary key
#  topic_name      :string           not null
#  parent_topic_id :integer
#  created_at      :datetime
#  updated_at      :datetime
#

class Topic < ActiveRecord::Base
  validates :topic_name, presence: true

  belongs_to :parent_topic,
    class_name: "Topic",
    foreign_key: :parent_topic_id,
    primary_key: :id

  has_many  :child_topics,
    class_name: "Topic",
    foreign_key: :parent_topic_id,
    primary_key: :id

    has_many :taggings,
      class_name: "Tagging",
      foreign_key: :topic_id,
      primary_key: :id

    has_many :subscriptions,
      class_name: "Subscription",
      foreign_key: :topic_id,
      primary_key: :id

    has_many :subscribed_users,
      through: :subscriptions,
      source: :subscriber

    has_many :stories,
      through: :taggings,
      source: :story

end
