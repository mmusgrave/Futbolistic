# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
user_category   | string    | not null, indexed, unique

## stories
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
body        | text      | not null
author_id   | integer   | not null, foreign key (references users), indexed

## comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
story_id  | integer   | not null, foreign key (references notes), indexed
parent_comment_id| integer   | foreign key (references tags), indexed
author_id   | integer    |not null foreign key (references tags), indexed
body        |text       |not null

## topics
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
topic_name  | string    | not null
parent_topic_id| integer  | foreign_key

## taggings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
story_id     | integer   | not null, foreign key (references notes), indexed
topic_id      | integer   | not null, foreign key (references tags), indexed


## subscriptions
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references notes), indexed
topic_id    | integer   | not null, foreign key (references tags), indexed

## followings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
follower_id     | integer   | not null, foreign key (references notes), indexed
author_id      | integer   | not null, foreign key (references tags), indexed

## bookmarkings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references notes), indexed
bookmarked_story_id  | integer   | not null, foreign key (references tags), indexed
