const url = 'http://localhost:3001';
const KEY = 'KEY';

export const getCategories = () => {
  return fetch(
    `${url}/categories`,
    {
        headers: { 'Authorization': KEY }
    }
  )
  .then(response => {
    return response.json()
  })
  .then(data => {
    return data
  })
};

export const getPostsByCategory = (category) => {
  return fetch(
    `${url}/${category}/posts`,
    {
        headers: { 'Authorization': KEY }
    }
  )
  .then(response => {
    return response.json()
  })
  .then(data => {
    return data
  })
};
