# json.partial! 'comment', comment: @comment
json.extract! @comment, :id, :body

json.author @comment.author, :id, :first_name, :last_name

json.story_id @comment.story, :id#, :title#, :author
#
