json.extract! story, :id, :title, :body

json.author story.author, :id, :first_name, :last_name

# json.comments  story.comments.each do |comment|
#   json.id comment.id
# end

json.comments story.comments, :id
