json.topics @topics.each do |topic|
  # json.partial! 'story', story: story

  # json.author story.author, :first_name, :last_name

  json.extract! topic, :id, :topic_name

  if topic.parent_topic then
    json.parent_topic topic.parent_topic, :id, :topic_name

  else
    json.parent_topic nil
  end

  # json.image_url asset_path(story.image.url)

  # json.stories story.comments.each do |comment|
  #   # json.comment comment, :id, :body,
  #   # json.set! author, :id, :first_name, :last_name
  #   # # json comment.author :id, :first_name, :last_name
  #   json.set! comment.id do
  #     json.id comment.id
  #     json.body comment.body
  #     json.author do
  #       json.id comment.author.id
  #       json.first_name comment.author.first_name
  #       json.last_name comment.author.last_name
  #     end
  #   end
  # end

end
