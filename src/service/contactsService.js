import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const getContacts = async token => {
  setAuthHeader(token);
  const contacts = await axios.get('/contacts');
  return contacts.data;
};

export const addContacts = async ({ name, number }) => {
  return await axios.post('/contacts', {
    name,
    number,
  });
};

export const deleteContacts = async id => {
  return await axios.delete(`/contacts/${id}`);
};

export const changeContacts = async (id, newContact) => {
  return await axios.patch(`/contacts/${id}`, newContact);
};
