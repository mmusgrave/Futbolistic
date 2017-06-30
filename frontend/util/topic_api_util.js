export const fetchTopic = (id) => {
  debugger
  return $.ajax({
    method: 'GET',
    url: `/api/topics/${id}`
  });
};

// export const updateTopic = (topic) =>{
//   debugger
//   return $.ajax({
//     method: 'PATCH',
//     url: `api/topics/${topic.topic.id}`,
//     data: {
//       topic: {
//         title: topic.topic.title,
//         body: topic.topic.body
//       }
//     }
//   });
