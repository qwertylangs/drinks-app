import {
  configureStore,
} from '@reduxjs/toolkit';

import { apiSlice } from '@/app/providers/StoreProvider/config/apiSlice';
import { rootReducer } from './root-reducer';

export function createReduxStore() {
  const store = configureStore({
    reducer: rootReducer,
    devTools: __IS_DEV__,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
  });

  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
