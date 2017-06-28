export const fetchAllStories = () => {
  // debugger
  return $.ajax({
    method: 'GET',
    url: 'api/stories'
  });
};

export const createStory = (story) => {
  return $.ajax({
    method: 'POST',
    url: '/api/stories',
    data: { story }
  });
};

export const fetchStory = (id) => {
  debugger
  return $.ajax({
    method: 'GET',
    url: `/api/stories/${id}`
  });
};

export const deleteStory = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/stories/${id}`,
    data: { id }
  });
};

export const updateStory = (story) =>{
  debugger
  return $.ajax({
    method: 'PATCH',
    url: `api/stories/${story.story.id}`,
    data: {
      story: {
        title: story.story.title,
        body: story.story.body
      }
    }
  });
};
