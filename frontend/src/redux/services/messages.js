import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const messagesApi = createApi({
  reducerPath: 'messages',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000',
  }),
  endpoints: (builder) => ({
    getMessages: builder.query({
      query: () => `messages`,
    }),
    getMessage: builder.query({
      query: (id) => `messages/${id}`,
    }),
  }),
});

export const { useGetMessagesQuery, useGetMessageQuery } = messagesApi;
