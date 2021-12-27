import { configureStore } from '@reduxjs/toolkit';
import user from './userSlice'
import tokens from '../home/component/tokenSlice'
export const store = configureStore({
  reducer: {
    user,
    tokens
  },
});
