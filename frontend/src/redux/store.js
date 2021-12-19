import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { ticketsApi } from './services/tickets';
import { usersApi } from './services/users';
import { messagesApi } from './services/messages';

export const store = configureStore({
  reducer: {
    [ticketsApi.reducerPath]: ticketsApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [messagesApi.reducerPath]: messagesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(ticketsApi.middleware)
      .concat(usersApi.middleware)
      .concat(messagesApi.middleware),
});

setupListeners(store.dispatch);
