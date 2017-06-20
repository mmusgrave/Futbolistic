# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`
- 'GET /api/users/:id'
  -user profile page
- `GET /api/users/:id/stories`
    - index of all stories written by a user
- `GET /api/users/:id/subscriptions`
    - index of all topics that a user subscribes to
- `GET /api/users/:id/followers`
    - index of all followers of that user
- `GET /api/users/:id/followings`
    - index of all followed authors of that user
- `GET /api/users/:id/bookmarks`
    - index of all stories bookmarked by that user

### Session

- `POST /api/session`
- `DELETE /api/session`

### Stories

- `GET /api/stories`
  - Stories index/search
  - accepts `topic_name` query param to list stories by tagged topic
  - accepts `author_name` query param to list stories by author
- `POST /api/stories`
- `GET /api/stories/:id`
- `PATCH /api/stories/:id`
- `DELETE /api/stories/:id`
- `GET /api/stories/:id/topics`
  - index of all topics for a story
- `GET /api/stories/:id/comments`
  - index of all comments for a story

### Topics

- `GET /api/topics`
  -index of topics
- `POST /api/topics`
- `GET /api/topics/:id`
- `DELETE /api/topics/:id`
- `GET /api/topics/:id/topics`
  - index of all subtopics for a topic
- `GET /api/topics/:id/stories`
  - index of all stories for a topic
- `POST /api/topics/:id/topics`
  - add a new subtopic to a topic
- `DELETE /api/topics/:id/topics`
  - remove a subtopic from a topic


### Subscriptions

- `GET /api/subscriptions`
- `POST /api/subscriptions`
- `GET /api/subscriptions/:id`
- `DELETE /api/subscriptions/:id`
- `GET /api/subscriptions/:id/stories`
  - index of all stories for a subscribed topic
- `GET /api/subscriptions/:id/users`
  - index of all users for a subscribed topic

### Comments

- `GET /api/comments/:id`
- `GET /api/comments/:id/stories`
  - show story of the comment
- `GET /api/comments/:id/users`
  - show user of a comment
- `POST /api/stories/:story_id/comments`: add comment to story
- `DELETE /api/stories/:story_id/comments`: remove comment from story
- `GET /api/comments/:id/comments/`: index of comments of one comment
- `POST /api/comments/:id/comments/`: add comment to comment
- `DELETE /api/comments/:id/comments/`: remove comment from a comment


### Bookmarks

- `POST /api/users/:id/bookmarks`
    - add a new bookmarked story for that user
- `DELETE /api/users/:id/bookmarks`
    - remove a bookmarked story for that user

### Tags

- `POST /api/stories/:story_id/topics`: add topic tag to story, should basically be the same as topics
- `DELETE /api/stories/:story_id/topics`: remove topic tag from story

### Followers

- `POST /api/:user_id/followers`: add new follower to a user
- `DELETE /api/:user_id/followers`: remove a follower from a user

### Followings

- `POST /api/:user_id/followings`: adds newly follower author for a user
- `DELETE /api/:user_id/followings`: remove a follower author for a user
