import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { apiServices } from './apiServices';
import authReducer from './authSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [apiServices.reducerPath]: apiServices.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiServices.middleware),
});

setupListeners(store.dispatch);
