import axios from 'axios';

const getPost = async () => {
  const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/post`);
  return response.data;
};

const addPost = async (newPost) => {
  console.log(newPost);
  await axios.post(`${process.env.REACT_APP_SERVER_URL}/post`, newPost);
};

const deletePost = async (id) => {
  console.log(id);
  await axios.delete(`${process.env.REACT_APP_SERVER_URL}/post/${id}`);
};

export { getPost, addPost, deletePost };
