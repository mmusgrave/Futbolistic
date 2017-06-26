json.stories @stories.each do |story|
  json.partial! 'story', story: story

  # json.author story.author, :first_name, :last_name

end
