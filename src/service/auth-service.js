import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const singUp = async body => {
  const createUser = await axios.post('/users/signup', body);
  setAuthHeader(createUser.data.token);
  return createUser.data;
};

export const logIn = async body => {
  const logInUser = await axios.post('/users/login', body);
  setAuthHeader(logInUser.data.token);
  return logInUser.data;
};

export const logOut = async () => {
  await axios.post('/users/logout');
  clearAuthHeader();
};

export const getProfile = async (token) => {
  setAuthHeader(token)
  const profile = await axios.get('/users/current');
  return profile.data;
};
