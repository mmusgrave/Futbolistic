# == Schema Information
#
# Table name: stories
#
#  id                 :integer          not null, primary key
#  title              :string           not null
#  body               :text             not null
#  author_id          :integer          not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#

class Story < ActiveRecord::Base
  validates :title, :body, :author_id, presence: true

  has_attached_file :image, default_url: 'https://s3.amazonaws.com/futbolistic-pro/defaultSoccerPic.jpg'
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/

  belongs_to :author,
    class_name: "User",
    foreign_key: :author_id,
    primary_key: :id

  has_many  :comments,
    class_name: "Comment",
    foreign_key: :story_id,
    primary_key: :id

  has_many  :taggings,
    class_name: "Tagging",
    foreign_key: :story_id,
    primary_key: :id

  has_many :tagged_topics,
    through: :taggings,
    source: :topic

    has_many :subscribed_users,
      through: :tagged_topics,
      source: :subscribed_users

end
