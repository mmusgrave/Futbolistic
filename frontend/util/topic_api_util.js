export const fetchTopic = (id) => {
  
  return $.ajax({
    method: 'GET',
    url: `/api/topics/${id}`
  });
};

// export const updateTopic = (topic) =>{
//   
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
