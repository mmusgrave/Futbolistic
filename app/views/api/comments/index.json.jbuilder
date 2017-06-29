json.comments @comments.each do |comment|
  # json.partial! 'comment', comment: comment

  json.id json.comment comment :id, :body

  json.author comment.author, :id, :first_name, :last_name

  # json.story comment.story, :id, :title

end
