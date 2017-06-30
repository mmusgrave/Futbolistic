# == Schema Information
#
# Table name: taggings
#
#  id         :integer          not null, primary key
#  story_id   :integer          not null
#  topic_id   :integer          not null
#  created_at :datetime
#  updated_at :datetime
#

class Tagging < ActiveRecord::Base
  validates :topic_id, :story_id, presence: true

  belongs_to :topic,
    class_name: "Topic",
    foreign_key: :topic_id,
    primary_key: :id

  belongs_to :story,
    class_name: "Story",
    foreign_key: :story_id,
    primary_key: :id


end
