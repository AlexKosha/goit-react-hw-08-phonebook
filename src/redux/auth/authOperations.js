import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import * as AuthService from 'service/auth-service';

export const createUser = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      return await AuthService.singUp(credentials);
    } catch (error) {
      toast.error('A user with this email already exists');
      return rejectWithValue(error.message);
    }
  }
);

export const authorization = createAsyncThunk(
  'auth/authorization ',
  async (credentials, { rejectWithValue }) => {
    try {
      return await AuthService.logIn(credentials);
    } catch (error) {
      toast.error('You entered the email or password incorrectly. Try again');
      return rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk(
  'auth/logOut',
  async (_, { rejectWithValue }) => {
    try {
      await AuthService.logOut();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      return await AuthService.getProfile(persistedToken);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
