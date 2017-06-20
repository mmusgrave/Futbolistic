## Component Hierarchy

**AuthFormContainer**
 - AuthForm

**HomeContainer**
 - Home
 - TopicsIndex
 - UserHeader

**TopicsIndex**
  * SubtopicsIndex
    - Subtopic

**GeneralFeedContainer** (is for all follows, authored stories, bookmarked stories, or stories from subscribed topic)
  * SubscriptionsIndex
  * FollowedAuthorsIndex
  * StoriesIndex
    - SubscribedStoriesIndex
    - AuthoredStoriesIndex
    - FollowedStoriesIndex
    - BookmarkedStoriesIndex

**AllSubscriptionFeedContainer**
  * SubscribedTopicsIndex
    - Topic
  * StoriesIndex

**SingleSubscriptionFeedContainer**
 - TopicHeader
  * StoriesIndex

**TopicFeedContainer**
 - TopicHeader
  * StoriesIndex

**SubtopicFeedContainer**
 - ParentTopicHeader
  + TopicHeader
    * StoriesIndex

**BookmarkedFeedContainer**
  * StoriesIndex

**FollowedFeedContainer**
  * FollowedAuthorsIndex
  * StoriesIndex

**AuthoredFeedContainer**
 - AuthorHeader
  * AuthoredStoriesIndex

**AuthorProfileContainer**
 - AuthorHeader
  * FollowersIndex
  * FollowedAuthorsIndex
  * AuthoredStoriesIndex
  * SubscriptionsIndex

**StoriesIndex**
 - StoryItem
  + StoryDetail
    - Tags
      - Tag
    * Story

**NewStoryContainer**
 - NewStory
  - NewStoryButton

**StoryContainer**
 - Story


## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/home" | "HomeContainer" |
| "/home/users/:usersId/ | "AuthorProfileContainer" |
| "/home/users/:usersId/general" | "GeneralFeedContainer" |
| "/home/users/:usersId/subscriptions/ | "AllSubscriptionFeedContainer" |
| "/home/users/:usersId/subscriptions/:subscriptionId/ | "SingleSubscriptionFeedContainer" |
| "/home/users/:usersId/stories/ | "AuthoredFeedContainer" |
| "/home/users/:usersId/stories/:storyId" | "StoryContainer" |
| "/home/users/:usersId/bookmarks/ | "BookmarkFeedContainer" |
| "/home/users/:usersId/follows/ | "FollowedFeedContainer" |
| "/home/topics/:topicsId/stories | "TopicFeedContainer" |
| "/home/topics/:topicsId/topics/:topicsId/stories | "SubtopicFeedContainer" |
| "/new-story" | "NewStoryContainer" |
