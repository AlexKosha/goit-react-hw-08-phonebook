import { createAsyncThunk } from '@reduxjs/toolkit';
import * as ContactsService from 'service/contactsService';

export const fetchContacts = createAsyncThunk(
  'contacts/getContacts',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    try {
      return await ContactsService.getContacts(persistedToken);
    } catch (error) {
      thunkAPI.rejectWishValue(error.message);
    }
  }
);

export const postContact = createAsyncThunk(
  'contacts/postContact',
  async (newContact, thunkAPI) => {
    try {
      const contact = await ContactsService.addContacts(newContact);
      return contact.data;
    } catch (error) {
      thunkAPI.rejectWishValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'conatcts/deleteContact',
  async (id, { rejectWishValue }) => {
    try {
      const contact = await ContactsService.deleteContacts(id);
      return contact.data;
    } catch (error) {
      rejectWishValue(error.message);
    }
  }
);

export const changeContact = createAsyncThunk(
  'contact/changeContact',
  async ({ id, newContact }) => {
    try {
      const changedContact = await ContactsService.changeContacts(
        id,
        newContact
      );

      return changedContact.data;
    } catch (error) {}
  }
);
