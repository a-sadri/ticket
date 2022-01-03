import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiServices = createApi({
  reducerPath: 'apiServices',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000',
  }),
  endpoints: (builder) => ({
    getTickets: builder.query({
      query: () => `tickets`,
    }),
    getTicket: builder.query({
      query: (id) => `tickets/${id}`,
    }),
    getUsers: builder.query({
      query: () => `users`,
    }),
    getUser: builder.query({
      query: (id) => `users/${id}`,
    }),
    getMessages: builder.query({
      query: () => `messages`,
    }),
    getMessage: builder.query({
      query: (id) => `messages/${id}`,
    }),
    addNewTicket: builder.mutation({
      query: (ticket) => ({
        url: '/tickets',
        method: 'POST',
        body: ticket,
      }),
    }),
    login: builder.mutation({
      query: (credentioals) => ({
        url: '/users/login',
        method: 'POST',
        body: credentioals,
      }),
    }),
  }),
});

export const {
  useGetTicketsQuery,
  useGetTicketQuery,
  useGetUsersQuery,
  useGetUserQuery,
  useGetMessagesQuery,
  useGetMessageQuery,
  useAddNewTicketMutation,
  useLoginMutation,
} = apiServices;
