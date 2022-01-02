import mongoose from 'mongoose';

const ticketSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: false,
    },
    // category: {},
    // tags: {},
    // department: {},
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ['pending', 'answered', 'completed'],
      default: 'pending',
    },
    parentTicketId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Ticket',
      required: false,
    },
  },
  { timestamps: true }
);

const Ticket = mongoose.model('Ticket', ticketSchema);

export default Ticket;
