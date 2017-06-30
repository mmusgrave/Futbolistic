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
      json.story_id comment.story.id
    end
  end

end

json.tags
