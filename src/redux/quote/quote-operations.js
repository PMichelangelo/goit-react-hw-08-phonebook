import { createAsyncThunk } from '@reduxjs/toolkit';
import { requestQuote } from 'api/quote-api';

export const fetchQuote = createAsyncThunk(
  'quote/get',
  async (_, rejectWithValue) => {
    try {
      const data = await requestQuote();
      return data;
    } catch (error) {
      rejectWithValue(error.response.data.message);
    }
  }
);
