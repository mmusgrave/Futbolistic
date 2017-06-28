# == Schema Information
#
# Table name: comments
#
#  id         :integer          not null, primary key
#  body       :text             not null
#  story_id   :integer          not null
#  author_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Comment < ActiveRecord::Base
  validates :body, :author_id, :story_id, presence: true

  belongs_to :author,
    class_name: "User",
    foreign_key: :author_id,
    primary_key: :id

  belongs_to :story,
    class_name: "Story",
    foreign_key: :story_id,
    primary_key: :id
end
