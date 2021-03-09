import { createSlice } from '@reduxjs/toolkit';
import { CounterState } from './CounterState';

const initialState: CounterState = {
  count: 9
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increase: (state) => {
      state.count++;
    },
    decrease: (state) => {
      state.count--;
    }
  }
});
