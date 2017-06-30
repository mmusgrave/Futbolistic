json.extract! story, :id, :title, :body

json.author story.author, :id, :first_name, :last_name

json.image_url asset_path(story.image.url)

json.comments do
  story.comments.each do |comment|
    # json.comment comment, :id, :body,
    # json.set! author, :id, :first_name, :last_name
    # # json comment.author :id, :first_name, :last_name
    # debugger
    json.set! comment.id do
      # json.id comment.id
      json.body comment.body
      json.author do
        json.id comment.author.id
        json.first_name comment.author.first_name
        json.last_name comment.author.last_name
      end
      json.story_id comment.story_id
    end
  end

end

json.tagged_topics do
  story.tagged_topics.each do |topic|
    # json.comment comment, :id, :body,
    # json.set! author, :id, :first_name, :last_name
    # # json comment.author :id, :first_name, :last_name
    # debugger
    json.set! topic.id do
      # json.id comment.id
      json.topic_name topic.topic_name
      json.parent_topic do
        json.id topic.parent_topic_id
        json.topic_name topic.parent_topic.topic_name
      end
    end
  end


end
