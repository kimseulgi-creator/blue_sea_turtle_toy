import axios from 'axios';

const getPost = async () => {
  const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/post`);
  return response.data;
};

const addPost = async (newPost) => {
  console.log(newPost);
  await axios.post(`${process.env.REACT_APP_SERVER_URL}/post`, newPost);
};

export { getPost, addPost };
