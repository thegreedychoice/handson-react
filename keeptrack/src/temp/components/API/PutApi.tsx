/* var okUrl = 'http://localhost:3000/photos/5001';
const notFoundErrorUrl = 'http://localhost:3000/photos/10000000';

var data = {
  title: 'Another Updated Photo',
};

fetch(notFoundErrorUrl, {
  method: 'PUT',
  body: JSON.stringify(data),
  headers: {
    'Content-Type': 'application/json',
  },
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
