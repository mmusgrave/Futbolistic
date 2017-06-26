# json.partial! "api/users/user", user: @user
json.extract! @user, :id, :username, :first_name, :last_name
# json.user @user, :id, :username, :first_name, :last_name

json.stories @user.stories.each do |story|
  json.extract! story, :title, :body
end
