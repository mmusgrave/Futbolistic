BleacherReport (open publishing)

Stories
Commenting on stories
Topics/Subtopics/Tags and Feed
Follows
Bonus: Bookmarks
Bonus: User Privileges

Futbolistic

Futbolistic live NB: This should be a link to your production site

Features & Implementation

Feeds

Feeds will be indexes of stories. There is a SubscriptionFeedContainer for the user that displays on their homepage, and is a feed containing articles from subscribed topics, articles from followed authors, articles authored by the user, and articles bookmarked by the user.

There will also be 2 different types of Feeds. Feeds for single subscribed topic, bookmarks for a user, or a feed for a specific author will have an index of the stories, each story item with the title and image (if it has one). The second kind of feeds (for All of a user subscriptions, or all of a users followed authors) will have an index of all the stories (from all the users subscribed topics or from the users followed authors). The feed will also have an index of all of the users subscribed topics or followed authors.

Story Rendering and Editing

On the database side, the stories/articles are stored in one table in the database, which contains columns for id, author_id, title, body, and an optional header_image_url. Upon login, an API call is made to the database which joins the user table and the subscriptions, followings, bookmarkings, and taggings tables on user_id and filters by the current user's id.

Stories are rendered in the Story component, which show the title, the image, and the body.

Stories can be edited or created on a StoryForm.

Homepage

The homepage is where the user is directed on sign up or login. It holds their followers, followed authors, their topic subscriptions, and their general feed container. In the subscriptions box, each subscription is a link to each particular SingleSubscriptionFeedContainer. The Subscriptions header is a like to AllSubscriptionFeedContainer. There is a link to the AuthoredFeedContainer, and a Link to the New Stories page.


Tags, Subscriptions, Follows, & Bookmarks

All of these attributes are stored in the database in a join table. These attributes allow for a Story to be associated with a certain topic (tag), a user to be associated with a certain topic (subscriptions), a user to be associated with another user (follow), and a user to be associated with a specific story (bookmark). These attributes are what allow us to access the data for feeds.

Future Directions for the Project

In addition to the features already implemented, I plan to continue work on this project. The next steps for Futbolistic are outlined below.

Bookmarks

A user bookmarking particular stories is a BleacherReport feature, so a user can always keep track of their favorite articles. This could be achieved with a bookmarkings Join table

User Privileges

User privileges could be written into the code, in which users are given categories of "reader", "author", and "admin", with different abilities. "reader"s can only read articles, "author"s can write, edit, and delete their own articles, and "admin"s can write and edit their own articles, delete any article, make topics, and delete topics.
