import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const ticketsApi = createApi({
  reducerPath: 'tickets',
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
  }),
});

export const { useGetTicketsQuery, useGetTicketQuery } = ticketsApi;
