import { createAsyncThunk } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';

import {
  signupRequest,
  loginRequest,
  currentRequest,
  logoutRequest,
} from '../../api/auth-api';

export const signup = createAsyncThunk(
  'auth/signup',
  async (body, { rejectWithValue }) => {
    try {
      const data = await signupRequest(body);
      return data;
    } catch (error) {
      if (error.response.status === 400) {
        Notiflix.Notify.failure('User with this email is already exist');
      } else {
        Notiflix.Notify.failure('Oops, something goes wrong :(');
      }
      console.log(error);
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (body, { rejectWithValue }) => {
    try {
      const data = await loginRequest(body);
      return data;
    } catch (error) {
      if (error.response.status === 400) {
        Notiflix.Notify.failure('Incorect email or password!');
      } else {
        Notiflix.Notify.failure('Oops, something goes wrong :(');
      }
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const current = createAsyncThunk(
  'auth/current',
  async (_, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();
      const data = await currentRequest(auth.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  },
  {
    condition: (_, { getState }) => {
      const { auth } = getState();
      if (!auth.token) {
        return false;
      }
    },
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const data = await logoutRequest();
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
