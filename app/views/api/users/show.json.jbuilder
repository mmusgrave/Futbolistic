# json.partial! "api/users/user", user: @user
json.extract! @user, :id, :username, :first_name, :last_name
# json.user @user, :id, :username, :first_name, :last_name

json.stories @user.stories.each do |story|
  json.extract! story, :title, :body
end

json.subscribed_topics do
 @user.subscribed_topics.each do |topic|
    json.set! topic.id do
      json.extract! topic, :id, :topic_name, :parent_topic_id
    end
  end
end

json.subscribed_stories do
 @user.subscribed_stories.each do |story|
    json.set! story.id do
      json.extract! story, :id, :title
      json.author story.author, :id, :first_name, :last_name
      json.image_url asset_path(story.image.url)
      json.tagged_topics do
        story.tagged_topics.each do |topic|
          json.set! topic.id do
            json.extract! topic, :id, :topic_name, :parent_topic_id
          end
        end
      end
    end

  end
end
