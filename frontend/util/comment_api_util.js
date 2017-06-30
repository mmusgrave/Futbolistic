export const fetchAllComments = () => {
  // 
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
//   
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
export const updateComment = (comment) =>{
  
  return $.ajax({
    method: 'PATCH',
    url: `api/comments/${comment.id}`,
    data: {
      comment: {
        body: comment.body
      }
    }
  });
};
