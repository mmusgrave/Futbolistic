export const fetchAllComments = () => {
  // debugger
  return $.ajax({
    method: 'GET',
    url: 'api/comments'
  });
};
//
export const createComment = (comment) => {
  return $.ajax({
    method: 'POST',
    url: '/api/comments',
    data: { comment }
  });
};
//
// export const fetchStory = (id) => {
//   debugger
//   return $.ajax({
//     method: 'GET',
//     url: `/api/stories/${id}`
//   });
// };
//
export const deleteComment = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/comments/${id}`,
    data: { id }
  });
};
//
// export const updateStory = (story) =>{
//   debugger
//   return $.ajax({
//     method: 'PATCH',
//     url: `api/stories/${story.story.id}`,
//     data: {
//       story: {
//         title: story.story.title,
//         body: story.story.body
//       }
//     }
//   });
// };
