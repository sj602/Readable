const url = 'http://localhost:3001';
const KEY = 'KEY';
const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'Authorization': KEY
};

// Categories
export const getCategories = () => {
  return fetch(
    `${url}/categories`,
    {
      headers
    }
  )
  .then(response => response.json())
  .then(data => data.categories)
  .then(data => data)
};

export const getPostsByCategory = (category) => {
  return fetch(
    `${url}/${category}/posts`,
    {
      headers
    }
  )
  .then(response => response.json())
  .then(data => data)
};

// Posts
export const getAllPosts = () => {
  return fetch(
    `${url}/posts`,
    {
      headers
    }
  )
  .then(response => response.json())
  .then(data => data)
};

export const addPost = (postData) => {
  return fetch(
    `${url}/posts`,
    {
      method: 'POST',
      body: JSON.stringify(postData),
      headers
    }
  )
  .then(response => response.json())
  .then(data => data)
};

export const getPost = (id) => {
  return fetch(
    `${url}/posts/${id}`,
    {
      method: 'GET',
      headers
    }
  )
  .then(response => response.json())
  .then(data => data)
};

export const editPost = (post) => {
  return fetch(
    `${url}/posts/${post.id}`,
    {
      method: 'PUT',
      body: JSON.stringify(post),
      headers
    }
  )
  .then(response => response.json())
  .then(data => data)
};

export const deletePost = (post) => {
  return fetch(
    `${url}/posts/${post.id}`,
    {
      method: 'DELETE',
      headers
    }
  )
  .then(response => response.json())
  .then(data => data)
};

// Comments
export const getCommentsByPost = (id) => {
  return fetch(
    `${url}/posts/${id}/comments`,
    {
      headers
    }
  )
  .then(response => response.json())
  .then(data => data)
};

// VOTE

export const vote = (id, option, type) => {
  const voteData = {id, option};

  if(type === 'post'){
    return fetch(
      `${url}/posts/${id}`,
      {
        method: 'POST',
        body: JSON.stringify(voteData),
        headers
      }
    )
    .then(response => response.json())
    .then(data => data)
  } else {
    return fetch(
      `${url}/comments/${id}`,
      {
        method: 'POST',
        body: JSON.stringify(voteData),
        headers
      }
    )
    .then(response => response.json())
    .then(data => data)
  }
};
