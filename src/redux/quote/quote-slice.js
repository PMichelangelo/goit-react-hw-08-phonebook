import { createSlice } from '@reduxjs/toolkit';
import { fetchQuote } from './quote-operations';
import { pending, rejected } from '../../shared/functions/redux';

const initialState = {
  quote: [],
  isLoading: false,
  error: null,
};

const quoteSlice = createSlice({
  name: 'quote',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchQuote.pending, pending)
      .addCase(fetchQuote.fulfilled, (state, { payload }) => {
        state.quote = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchQuote.rejected, rejected);
  },
});

export default quoteSlice.reducer;
