import asyncHandler from 'express-async-handler';
import Ticket from '../models/ticketModel.js';

// @desc   Fetch all tickets
// @route  GET /tickets
// @access Public
const getTickets = asyncHandler(async (req, res) => {
  const tickets = await Ticket.find({});
  res.json(tickets);
});

// @desc   Add ticket
// @route  POST /tickets
// @access Private
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

export { getTickets, addTicket };
