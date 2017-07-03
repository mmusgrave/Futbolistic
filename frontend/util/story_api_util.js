export const fetchAllStories = () => {
  //
  return $.ajax({
    method: 'GET',
    url: 'api/stories'
  });
};
//
// export const createStory = (story) => {
//   return $.ajax({
//     method: 'POST',
//     url: '/api/stories',
//     data: { story }
//   });
// };

export const createStory = (story) => {

  return $.ajax({
    method: 'POST',
    url: '/api/stories',
    contentType: false,
    processData: false,
    data: story
  });
};

export const fetchStory = (id) => {

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
    url: `api/stories/${story.id}`,
    data: {
      story: {
        title: story.title,
        body: story.body,
        image: story.image
      }
    }
  });
};
