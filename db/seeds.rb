# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

words = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet erat accumsan, euismod quam nec, pellentesque orci. In nec ex sapien. Mauris imperdiet venenatis odio eget fringilla. Quisque dictum felis ut consectetur suscipit. Duis accumsan risus in porta aliquet. Proin lobortis felis vel tortor tempus ultricies. Donec condimentum ante ac justo varius, vitae venenatis urna ornare. Nunc sagittis neque non massa lobortis aliquam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi porttitor nisi sit amet sem tempor, ac congue leo condimentum. Phasellus at tincidunt neque, eu pulvinar nisi. Curabitur consequat, magna et cursus ultricies, arcu velit ultrices dolor, sit amet vehicula libero enim sed lorem. Quisque fermentum euismod consequat. Etiam vitae imperdiet dui. Aliquam laoreet lobortis sapien, sed cursus felis eleifend at.

Curabitur vestibulum arcu eu diam congue, nec porttitor nulla maximus. Donec id scelerisque elit. Nulla turpis arcu, imperdiet at vehicula sed, fringilla ut quam. Nunc vel ornare lectus. Curabitur faucibus enim eget ipsum accumsan convallis. Integer luctus interdum magna sit amet imperdiet. Duis eros libero, rutrum in ullamcorper eu, tempor nec lectus. Morbi pretium felis nec ante commodo, in dignissim enim sodales. Etiam tincidunt euismod risus, ac cursus mauris fermentum sit amet. In mi turpis, vehicula sed magna sit amet, molestie mattis nulla. Maecenas iaculis nulla non sem pretium, eu consequat arcu interdum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec viverra justo eget dolor ullamcorper maximus. Aenean ultrices libero sagittis urna volutpat vulputate. Vivamus ullamcorper sem quis maximus mollis.

Maecenas feugiat neque non diam maximus dapibus. Sed aliquam nisl vel dolor feugiat rutrum. Nullam dapibus porta neque sit amet vehicula. Cras vitae massa ut tortor volutpat porta congue in libero. Sed viverra suscipit ante at pretium. Nunc iaculis ultricies purus et tempor. Pellentesque sagittis dolor non tortor commodo egestas."
User.destroyAll!
guest = User.create!({ username: "guest", password: "password", first_name: "Guest", last_name: "Guest" })
zidane = User.create!({ username: "zizou", password: "password", first_name: "Zinedine", last_name: "Zidane" })
beckham = User.create!({ username: "becks", password: "password", first_name: "David", last_name: "Beckham" })
messi = User.create!({ username: "messi10", password: "password", first_name: "Lionel", last_name: "Messi" })
ronaldo = User.create!({ username: "cr7", password: "password", first_name: "Cristiano", last_name: "Ronaldo" })
dele = User.create!({ username: "dele", password: "Tottenham", first_name: "Dele", last_name: "Alli" })
musgrave = User.create!({ username: "mmusgrave", password: "password", first_name: "Michael", last_name: "Musgrave" })

Story.destroyAll!
zidane_story1 = Story.create!({ title: "Real Madrid vs Atletico", body: words, author_id: zidane.id })
zidane_story2 = Story.create!({ title: "France", body: words, author_id: zidane.id })
zidane_story3 = Story.create!({ title: "Juventus", body: words, author_id: zidane.id })
zidane_story4 = Story.create!({ title: "Marseille", body: words, author_id: zidane.id })
zidane_story5 = Story.create!({ title: "Monaco", body: words, author_id: zidane.id })

beckham_story1 = Story.create!({ title: "Real Madrid", body: words, author_id: beckham.id })
beckham_story2 = Story.create!({ title: "Manchester United", body: words, author_id: beckham.id })
beckham_story3 = Story.create!({ title: "PSG", body: words, author_id: beckham.id })
beckham_story4 = Story.create!({ title: "Los Angeles Galaxy", body: words, author_id: beckham.id })
beckham_story5 = Story.create!({ title: "England", body: words, author_id: beckham.id })

messi_story1 = Story.create!({ title: "Barcelona", body: words, author_id: messi.id })
messi_story2 = Story.create!({ title: "Argentina", body: words, author_id: messi.id })
messi_story3 = Story.create!({ title: "Newell's Old Boys", body: words, author_id: messi.id })

ronaldo_story1 = Story.create!({ title: "Real Madrid", body: words, author_id: ronaldo.id })
ronaldo_story2 = Story.create!({ title: "Manchester United", body: words, author_id: ronaldo.id })
ronaldo_story3 = Story.create!({ title: "Sporting", body: words, author_id: ronaldo.id })
ronaldo_story4 = Story.create!({ title: "Portugal", body: words, author_id: ronaldo.id })

dele_story1 = Story.create!({ title: "Tottenham", body: words, author_id: dele.id })
dele_story2 = Story.create!({ title: "MK Dons", body: words, author_id: dele.id })
dele_story3 = Story.create!({ title: "England", body: words, author_id: dele.id })
dele_story4 = Story.create!({ title: "Ajax", body: words, author_id: dele.id })
dele_story5 = Story.create!({ title: "Los Angeles Galaxy", body: words, author_id: dele.id })

musgrave_story1 = Story.create!({ title: "Real Madrid", body: words, author_id: musgrave.id })
musgrave_story2 = Story.create!({ title: "France", body: words, author_id: musgrave.id })
musgrave_story3 = Story.create!({ title: "Juventus", body: words, author_id: musgrave.id })
musgrave_story4 = Story.create!({ title: "Manchester United", body: words, author_id: musgrave.id })
musgrave_story5 = Story.create!({ title: "Monaco", body: words, author_id: musgrave.id })

comment_words_1 = "Great Article!"
comment_words_2 = "THIS WAS AWFUL!!!!!!"
comment_words_3 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet erat accumsan, euismod quam nec, pellentesque orci. In nec ex sapien. Mauris imperdiet venenatis odio eget fringilla. Quisque dictum felis ut consectetur suscipit. Duis accumsan risus in porta aliquet. Proin lobortis felis vel tortor tempus ultricies. Donec condimentum ante ac justo varius, vitae venenatis urna ornare. Nunc sagittis neque non massa lobortis aliquam. Class aptent taciti sociosqu ad litora torquent"

Comment.destroyAll!
zidane_comment1 = Comment.create!({ author_id: zidane.id, story_id: zidane_story1.id , body: comment_words_1})
zidane_comment2 = Comment.create!({ author_id: zidane.id, story_id: zidane_story2.id, body: comment_words_1})
zidane_comment3 = Comment.create!({ author_id: zidane.id, story_id: zidane_story3.id, body: comment_words_1})
zidane_comment4 = Comment.create!({ author_id: zidane.id, story_id: zidane_story4.id, body: comment_words_1})
zidane_comment5 = Comment.create!({ author_id: zidane.id, story_id: zidane_story5.id, body: comment_words_1})

beckham_comment1 = Comment.create!({ author_id: beckham.id, story_id: zidane_story1.id,  body: comment_words_2})
beckham_comment2 = Comment.create!({ author_id: beckham.id, story_id: zidane_story2.id, body: comment_words_1})
beckham_comment3 = Comment.create!({ author_id: beckham.id, story_id: zidane_story3.id, body: comment_words_3})
beckham_comment4 = Comment.create!({ author_id: beckham.id, story_id: zidane_story4.id, body: comment_words_1})
beckham_comment5 = Comment.create!({ author_id: beckham.id, story_id: zidane_story2.id,  body: comment_words_2})

messi_comment1 = Comment.create!({ author_id: messi.id, story_id: zidane_story1.id, body: comment_words_3})
messi_comment2 = Comment.create!({ author_id: messi.id, story_id: zidane_story2.id, body: comment_words_3})
messi_comment3 = Comment.create!({ author_id: messi.id, story_id: zidane_story3.id, body: comment_words_3})

ronaldo_comment1 = Comment.create!({ author_id: ronaldo.id, story_id: zidane_story1.id,  body: comment_words_1})
ronaldo_comment2 = Comment.create!({ author_id: ronaldo.id, story_id: zidane_story2.id, body: comment_words_1})
ronaldo_comment3 = Comment.create!({ author_id: ronaldo.id, story_id: zidane_story3.id , body: comment_words_1})
ronaldo_comment4 = Comment.create!({ author_id: ronaldo.id, story_id: zidane_story4.id , body: comment_words_1})

dele_comment1 = Comment.create!({ author_id: dele.id, story_id: zidane_story1.id , body: comment_words_2})
dele_comment2 = Comment.create!({ author_id: dele.id, story_id: zidane_story2.id , body: comment_words_2})
dele_comment3 = Comment.create!({ author_id: dele.id, story_id: zidane_story3.id, body: comment_words_2})
dele_comment4 = Comment.create!({ author_id: dele.id, story_id: zidane_story4.id ,body: comment_words_2})
dele_comment5 = Comment.create!({ author_id: dele.id, story_id: zidane_story5.id , body: comment_words_2})

musgrave_comment1 = Comment.create!({ author_id: musgrave.id, story_id: zidane_story1.id , body: comment_words_1})
musgrave_comment2 = Comment.create!({ author_id: musgrave.id, story_id: zidane_story2.id, body: comment_words_2})
musgrave_comment3 = Comment.create!({ author_id: musgrave.id, story_id: zidane_story3.id , body: comment_words_3})
musgrave_comment4 = Comment.create!({ author_id: musgrave.id, story_id: zidane_story4.id, body: comment_words_1})
musgrave_comment5 = Comment.create!({ author_id: musgrave.id, story_id: zidane_story5.id ,body: comment_words_1})


 # Comment.create!({body: "France are lame", author_id: 2, story_id: 6})

Topic.destroyAll!
spain = Topic.create!({ topic_name: "All of Spain", parent_topic_id: nil })
germany = Topic.create!({ topic_name: "Germany", parent_topic_id: nil })
italy = Topic.create!({ topic_name: "Italy", parent_topic_id: nil })
france = Topic.create!({ topic_name: "France", parent_topic_id: nil })
england = Topic.create!({ topic_name: "All of England", parent_topic_id: nil })
south_america = Topic.create!({ topic_name: "South America", parent_topic_id: nil })
europe = Topic.create!({ topic_name: "Europe", parent_topic_id: nil })
usa = Topic.create!({ topic_name: "USA", parent_topic_id: nil })

spain1 = Topic.create!({ topic_name: "Real Madrid", parent_topic_id: spain.id })
spain2 = Topic.create!({ topic_name: "Atlético Madrid", parent_topic_id: spain.id })
spain3 = Topic.create!({ topic_name: "Spain 3", parent_topic_id: spain.id })
spain4 = Topic.create!({ topic_name: "Spain 4", parent_topic_id: spain.id })
spain5 = Topic.create!({ topic_name: "Spain 5", parent_topic_id: spain.id })

germany1 = Topic.create!({ topic_name: "Germany 1", parent_topic_id: germany.id })
germany2 = Topic.create!({ topic_name: "Germany 2", parent_topic_id: germany.id })
germany3 = Topic.create!({ topic_name: "Germany 3", parent_topic_id: germany.id })
germany4 = Topic.create!({ topic_name: "Germany 4", parent_topic_id: germany.id })
germany5 = Topic.create!({ topic_name: "Germany 5", parent_topic_id: germany.id })

italy1 = Topic.create!({ topic_name: "Italy 1", parent_topic_id: italy.id })
italy2 = Topic.create!({ topic_name: "Italy 2", parent_topic_id: italy.id })
italy3 = Topic.create!({ topic_name: "Italy 3", parent_topic_id: italy.id })
italy4 = Topic.create!({ topic_name: "Italy 4", parent_topic_id: italy.id })
italy5 = Topic.create!({ topic_name: "Italy 5", parent_topic_id: italy.id })

france1 = Topic.create!({ topic_name: "France 1", parent_topic_id: france.id })
france2 = Topic.create!({ topic_name: "France 2", parent_topic_id: france.id })
france3 = Topic.create!({ topic_name: "France 3", parent_topic_id: france.id })
france4 = Topic.create!({ topic_name: "France 4", parent_topic_id: france.id })
france5 = Topic.create!({ topic_name: "France 5", parent_topic_id: france.id })

england1 = Topic.create!({ topic_name: "Manchester United", parent_topic_id: england.id })
england2 = Topic.create!({ topic_name: "England 2", parent_topic_id: england.id })
england3 = Topic.create!({ topic_name: "England 3", parent_topic_id: england.id })
england4 = Topic.create!({ topic_name: "England 4", parent_topic_id: england.id })
england5 = Topic.create!({ topic_name: "England 5", parent_topic_id: england.id })

south_america1 = Topic.create!({ topic_name: "South America 1", parent_topic_id: south_america.id })
south_america2 = Topic.create!({ topic_name: "South America 2", parent_topic_id: south_america.id })
south_america3 = Topic.create!({ topic_name: "South America 3", parent_topic_id: south_america.id })
south_america4 = Topic.create!({ topic_name: "South America 4", parent_topic_id: south_america.id })
south_america5 = Topic.create!({ topic_name: "South America 5", parent_topic_id: south_america.id })

europe1 = Topic.create!({ topic_name: "Europe 1", parent_topic_id: europe.id })
europe2 = Topic.create!({ topic_name: "Europe 2", parent_topic_id: europe.id })
europe3 = Topic.create!({ topic_name: "Europe 3", parent_topic_id: europe.id })
europe4 = Topic.create!({ topic_name: "Europe 4", parent_topic_id: europe.id })
europe5 = Topic.create!({ topic_name: "Europe 5", parent_topic_id: europe.id })

usa1 = Topic.create!({ topic_name: "USA 1", parent_topic_id: usa.id })
usa2 = Topic.create!({ topic_name: "USA 2", parent_topic_id: usa.id })
usa3 = Topic.create!({ topic_name: "USA 3", parent_topic_id: usa.id })
usa4 = Topic.create!({ topic_name: "USA 4", parent_topic_id: usa.id })
usa5 = Topic.create!({ topic_name: "USA 5", parent_topic_id: usa.id })


Tagging.destroyAll!
tagging1 = Tagging.create!({ topic_id: spain1.id, story_id: beckham_story1.id })
tagging2 = Tagging.create!({ topic_id: spain1.id, story_id: ronaldo_story1.id })
tagging3 = Tagging.create!({ topic_id: spain1.id, story_id: musgrave_story1.id })
tagging4 = Tagging.create!({ topic_id: spain1.id, story_id: zidane_story1.id })
tagging5 = Tagging.create!({ topic_id: spain2.id, story_id: zidane_story1.id })

tagging6 = Tagging.create!({ topic_id: england1.id, story_id: beckham_story2.id })
tagging7 = Tagging.create!({ topic_id: england1.id, story_id: ronaldo_story2.id })
tagging8 = Tagging.create!({ topic_id: england1.id, story_id: musgrave_story4.id })


Subscription.destroyAll!
subscription1 = Subscription.create!({ topic_id: spain1.id, user_id: zidane.id })
subscription2 = Subscription.create!({ topic_id: spain1.id, user_id: beckham.id })
subscription3 = Subscription.create!({ topic_id: spain1.id, user_id: messi.id })
subscription4 = Subscription.create!({ topic_id: spain1.id, user_id: ronaldo.id })


subscription5 = Subscription.create!({ topic_id: spain2.id, user_id: zidane.id })
subscription6 = Subscription.create!({ topic_id: spain2.id, user_id: beckham.id })
subscription7 = Subscription.create!({ topic_id: spain2.id, user_id: messi.id })
subscription8 = Subscription.create!({ topic_id: spain2.id, user_id: ronaldo.id })

subscription9 = Subscription.create!({ topic_id: england1.id, user_id: zidane.id })
subscription10 = Subscription.create!({ topic_id: england1.id, user_id: beckham.id })
subscription11 = Subscription.create!({ topic_id: england1.id, user_id: messi.id })
subscription12 = Subscription.create!({ topic_id: england1.id, user_id: ronaldo.id })
subscription13 = Subscription.create!({ topic_id: england1.id, user_id: musgrave.id })
subscription14 = Subscription.create!({ topic_id: spain1.id, user_id: musgrave.id })

# spain = Topic.create!({ topic_name: "Spain", parent_topic_id: nil })
# germany = Topic.create!({ topic_name: "Germany", parent_topic_id: nil })
# italy = Topic.create!({ topic_name: "Italy", parent_topic_id: nil })
# france = Topic.create!({ topic_name: "France", parent_topic_id: nil })
# england = Topic.create!({ topic_name: "England", parent_topic_id: nil })
# south_america = Topic.create!({ topic_name: "South America", parent_topic_id: nil })
# europe = Topic.create!({ topic_name: "Europe", parent_topic_id: nil })
# usa = Topic.create!({ topic_name: "USA", parent_topic_id: nil })
#
# spain = Topic.create!({ topic_name: "Spain", parent_topic_id: nil })
# germany = Topic.create!({ topic_name: "Germany", parent_topic_id: nil })
# italy = Topic.create!({ topic_name: "Italy", parent_topic_id: nil })
# france = Topic.create!({ topic_name: "France", parent_topic_id: nil })
# england = Topic.create!({ topic_name: "England", parent_topic_id: nil })
# south_america = Topic.create!({ topic_name: "South America", parent_topic_id: nil })
# europe = Topic.create!({ topic_name: "Europe", parent_topic_id: nil })
# usa = Topic.create!({ topic_name: "USA", parent_topic_id: nil })
#
# spain = Topic.create!({ topic_name: "Spain", parent_topic_id: nil })
# germany = Topic.create!({ topic_name: "Germany", parent_topic_id: nil })
# italy = Topic.create!({ topic_name: "Italy", parent_topic_id: nil })
# france = Topic.create!({ topic_name: "France", parent_topic_id: nil })
# england = Topic.create!({ topic_name: "England", parent_topic_id: nil })
# south_america = Topic.create!({ topic_name: "South America", parent_topic_id: nil })
# europe = Topic.create!({ topic_name: "Europe", parent_topic_id: nil })
# usa = Topic.create!({ topic_name: "USA", parent_topic_id: nil })
#
# spain = Topic.create!({ topic_name: "Spain", parent_topic_id: nil })
# germany = Topic.create!({ topic_name: "Germany", parent_topic_id: nil })
# italy = Topic.create!({ topic_name: "Italy", parent_topic_id: nil })
# france = Topic.create!({ topic_name: "France", parent_topic_id: nil })
# england = Topic.create!({ topic_name: "England", parent_topic_id: nil })
# south_america = Topic.create!({ topic_name: "South America", parent_topic_id: nil })
# europe = Topic.create!({ topic_name: "Europe", parent_topic_id: nil })
# usa = Topic.create!({ topic_name: "USA", parent_topic_id: nil })
