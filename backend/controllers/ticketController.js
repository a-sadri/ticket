import asyncHandler from 'express-async-handler';
import Ticket from '../models/ticketModel.js';

const addTicket = asyncHandler(async (req, res) => {
  const { title, description } = req.body;

  const ticketExists = await Ticket.findOne({ title });
  if (ticketExists) {
    res.status(400);
    throw new Error('Ticket already exists');
  }

  const ticket = await Ticket.create({
    title,
    description,
  });

  if (ticket) {
    res.status(201).json({
      title: ticket.title,
      description: ticket.description,
    });
  } else {
    res.status(400);
    throw new Error('Invalid ticket data');
  }
});

export { addTicket };
