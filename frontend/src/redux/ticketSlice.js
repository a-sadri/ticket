import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const ticketSlice = createSlice({
  name: 'ticket',
  initialState,
  reducers: {
    getAllTickets: (state) => {},
  },
});

export const {} = ticketSlice.actions;

export default ticketSlice.reducer;
