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
  }),
});

export const { useGetTicketsQuery } = ticketsApi;
