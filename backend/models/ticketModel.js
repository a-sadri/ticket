import mongoose from 'mongoose';

const ticketSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Ticket = mongoose.model('Ticket', ticketSchema);

export default Ticket;
