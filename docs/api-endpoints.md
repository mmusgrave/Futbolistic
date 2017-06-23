# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
<!-- - `PATCH /api/users` -->
- `GET /api/users/:id`
  -user home page

### Session

- `POST /api/session`
- `DELETE /api/session`

### Stories

- `POST /api/stories`
- `GET /api/stories/:id`
- `PATCH /api/stories/:id`
- `DELETE /api/stories/:id`

### Topics

- `GET /api/topics/:id`
  - index of all stories for a topic

### Subscriptions

- `POST /api/subscriptions`
- `DELETE /api/subscriptions/:id`

### Comments

- `POST /api/stories/:story_id/comments`: add comment to story
- `DELETE /api/comments/:id`: remove comment from story

### Bookmarks

- `POST /api/users/:id/bookmarks`
    - add a new bookmarked story for that user
- `DELETE /api/users/:id/bookmarks`
    - remove a bookmarked story for that user

### Followings

- `POST /api/:user_id/followings`: adds newly follower author for a user
- `DELETE /api/:user_id/followings`: remove a follower author for a user
