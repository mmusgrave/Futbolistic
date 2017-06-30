json.extract! @topic, :id, :topic_name

json.stories do
 @topic.stories.each do |story|
    json.set! story.id do
      json.extract! story, :id, :title
    end

  end
  if @topic.child_topics then
    @topic.child_topics.each do |child_topic|
          child_topic.stories.each do |story|
             json.set! story.id do
               json.extract! story, :id, :title
               json.author story.author, :id, :first_name, :last_name
             end

           end
         end
  end
end

if @topic.parent_topic then
  json.parent_topic @topic.parent_topic, :id, :topic_name

else
  json.parent_topic nil
end
