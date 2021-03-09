import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { RootState } from './RootState';
import { kanyeRestSlice } from '../KanyeRest/state/kanyeRestSlice';
import { counterSlice } from '../Counter/state/counterSlice';

const reducer = combineReducers<RootState>({
  kanyeRest: kanyeRestSlice.reducer,
  counter: counterSlice.reducer
});


export const store = configureStore({
  reducer
});