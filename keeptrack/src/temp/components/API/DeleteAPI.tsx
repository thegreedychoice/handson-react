/* var okUrl = 'http://localhost:3000/photos/5001';

fetch(okUrl, {
  method: 'DELETE',
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
