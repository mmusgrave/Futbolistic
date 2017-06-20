```js
{
  currentUser: {
    id: 1,
    username: "app-academy"
  },
  storiesFeed: {
    stories: {
      1: {
        id: 1
        title: "Real defeat Bayern",
        author_id: 1,
      },
      2: {
        id: 2
        title: "Monaco fall to defeat Juve",
        author_id: 3,
      }
    }
  }
  currentStory: {
    title: "Real defeat Bayern",
    body: "has this body",
    // header_image_url: "oqoiwjeqw.png"
    author_id: 1,
    comments: {
      1: {
        id: 1,
        author_id: 39,
        body: "good article. well done"
        comments: {}
      },
      2: {
        id: 2,
        author_id: 92,
        body: "GO MADRID!",
        comments: {
          1: {
            id: 3,
            author_id: 82,
            parent_comment_id: 2,
            body: "Madrid stink",
            comments: {}
          }
        }
      }
    },
    tags: {
      1: {
        id: 1,
        topic: "Germany"
      },
      2: {
        id: 2,
        topic: "Bayern Munich"
      },
      3: {
        id: 3,
        topic: "Spain"
      },
      4: {
        id: 4,
        topic: "Real Madrid"
      }
    }
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    createStory: {errors: ["title can't be blank", "body can't be blank"]}
  },
  writtenStories: {
    1: {
      id: 1
      title: "Real defeat Bayern"
    },
    2: {
      id: 3,
      title: "Why is Croatian Football so good?",
    }
  },
  followers: {
    1: {
      id: 2
      name: "user2"
    },
    2: {
      id: 3
      name: "user3"
    }
    3: {
      id: 323
      name: "jeff"
    }
  },
  follows: {
    1: {
      id: 3
      name: "user3"
    },
    2: {
      id: 4
      name: "user4"
    }
  },
  bookmarks: {
    1: {
      id: 1
      story_id: 1
    }
  },
  subscriptions: {
    1: {
      id: 1
      topic: "Germany"
    },
    2: {
      id: 2
      name: "Juventus"
    }
  }

}
