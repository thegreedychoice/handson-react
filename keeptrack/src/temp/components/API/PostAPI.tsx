/* var url = 'http://localhost:3000/photos';
var data = {
  albumId: 1,
  title: 'Another Photo',
  url: 'https://via.placeholder.com/600/b0f7cc',
  thumbnailUrl: 'https://via.placeholder.com/150/b0f7cc',
};

fetch(url, {
  method: 'POST',
  body: JSON.stringify(data),
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then((response) => {
    console.log(response);
    return response;
  })
  .then((response) => {
    if (!response.ok) throw new Error(response.statusText);
    return response;
  })
  .then((response) => response.json())
  .then((response) => console.log('Success:', JSON.stringify(response)))
  .catch((error) => console.error('Error:', error));
 */

export {};
