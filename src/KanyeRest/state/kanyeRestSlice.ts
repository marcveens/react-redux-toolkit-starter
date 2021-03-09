import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { asyncDataInitialState } from '../../store/AsyncData';
import { KanyeRestQuote } from '../types/KanyeRestQuote';
import { KanyeRestState } from './KanyeRestState';

const initialState: KanyeRestState = {
  quote: asyncDataInitialState
};

export const kanyeRestSlice = createSlice({
  name: 'kanyeRest',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<KanyeRestQuote>) => {
      state.quote.loading = false;
      state.quote.data = action.payload;
    },
    setLoader: (state, action: PayloadAction<boolean | undefined>) => {
      state.quote.loading = action.payload === undefined ? true : action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.quote.loading = false;
      state.quote.error = action.payload;
    }
  }
});