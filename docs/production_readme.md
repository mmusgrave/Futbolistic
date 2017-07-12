
# Futbolistic

Futbolistic is a web application inspired by the initial version of BleacherReport and Medium.


BleacherReport (open publishing)

Stories
Commenting on stories
Topics/Subtopics/Tags and Feed
Bonus: Follows
Bonus: Bookmarks
Bonus: User Privileges
[Live](http://futbolistic.herokuapp.com/#/)

## Features

* Authentication
    * Session is authenticated in the backend. All queries return data that corresponds to the proper user.
    * User can log in from any page in the app. Writing a story, editing a story, writing a comment, viewing a subscription feed, etc. requires user log in, and these features are not available without an account. (useername: 'zizou', password: 'password')
* Publish a story
* Edit an already published story
* Delete a story
* Comment on stories
* Delete a comment from a story
* Navigate to feeds
* Feeds display all articles of their topic
* User have Subscribed Topics
* Subscribed Topics display combined feed of subscribed feeds
* View articles written by other users
* View comments from other users

<!-- Feeds

Feeds will be indexes of stories. There is a SubscriptionFeedContainer for the user that displays on their homepage, and is a feed containing articles from topics that the user has subscribed to. On the user homepage there is also a list of the subscribed topics with links to each topic, so the user can view each topic individually.

Topics

Topics are either a main topic or a subtopic. All articles for a subtopic will also be in the feed of that main topic. Stories will be associated to each topic through tags. and will then be displayed on that topic's feed.

Story Rendering and Editing

On the database side, the stories/articles are stored in one table in the database, which contains columns for id, author_id, title, body, and an optional image through AWS.

Stories are rendered in the Story component, which show the title, the image, and the body.

Stories can be edited or created on a StoryForm.

Homepage

The homepage is where the user is directed on sign up or login. It holds their topic subscriptions, and their general feed container. In the subscriptions box, each subscription is a link to each particular TopicShowContainer. The Subscriptions header is a like to SubscriptionFeedContainer.


Topics, Tags, Subscriptions, & Feeds

All of these attributes are stored in the database in a join table. These attributes allow for a Story to be associated with a certain topic (tag) and a user to be associated with a certain topic (subscriptions). These attributes are what allow us to access the data for subscription feeds. Upon login, an API call is made to the database which joins the user table,  the stories table, and the topics table through the subscriptions and taggings tables. Once the user is logged in they have all of their subscribed topics and stories available to them on their homepage. On the backend, the taggings table is a join table connecting the story_id of a tagged story with the topic_id of the topic the story falls under. The subscriptions table is also a join table connecting the user_id of the subscribed user to the topic_id of the topic they are subscribed to. The structure of the tables is as follows [Users]-[Subscriptions Join]-[Topics]-[Taggings Join]-[Stories]. This structure allows the User to immediately access all of the stories that they are subscribed to using a Double Through association. The Users table has a through association to subscribed topics, and the Topics table has a through association to tagged stories. A user has access to their subscribed stories via a through association that uses these 2 through associations.

Future Directions for the Project

In addition to the features already implemented, I plan to continue work on this project. The next steps for Futbolistic are outlined below.

Follows

Users should be able to follow one another, so that they can be updated when their favorite authors write a new story. This new story will ideally show up in the same feed as the currently SubscriptionFeed.

Bookmarks

A user bookmarking particular stories is a BleacherReport feature, so a user can always keep track of their favorite articles. This could be achieved with a bookmarkings join table

User Privileges

User privileges could be written into the code, in which users are given categories of "reader", "author", and "admin", with different abilities. "reader"s can only read articles, "author"s can write, edit, and delete their own articles, and "admin"s can write and edit their own articles, delete any article, make topics, and delete topics.


Link to live site
A couple sentences to describe the project
Instructions/how to play (for games)
How to run the code (for Ruby projects)
List of techs/languages/plugins/APIs used
Technical implementation details for anything worth mentioning
Anything you had to stop and think about before building
Snippets or links to see code for these (make sure it looks good, no 30 line methods)
Screenshots of anything related that looks cool (make sure these link to the live site if applicable)
To-dos/future features -->
