import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://636506397b209ece0f551639.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetch',
  async (_, thunkApi) => {
    try {
      const data = await axios.getContacts();
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const addContacts = createAsyncThunk(
  'contacts/addContacts',
  async (data, thunkApi) => {
    try {
      const result = await axios.addContacts(data);
      return result;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
export const removeContacts = createAsyncThunk(
  'contacts/removeContacts',
  async (id, thunkApi) => {
    try {
      await axios.removeContacts(id);
      return id;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
