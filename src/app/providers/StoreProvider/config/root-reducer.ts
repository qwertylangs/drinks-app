import { combineReducers } from '@reduxjs/toolkit';
import { apiSlice } from '@/app/providers/StoreProvider/config/apiSlice';

import { appSlice } from './appSlice';

export const rootReducer = combineReducers({
  [appSlice.name]: appSlice.reducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
});
