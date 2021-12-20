import asyncHandler from 'express-async-handler';
import Ticket from '../models/ticketModel.js';

// @desc   Fetch all tickets
// @route  GET /tickets
// @access Public
const getTickets = asyncHandler(async (req, res) => {
  const tickets = await Ticket.find().populate('user', 'name -_id');
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

// @desc   Fetch a ticket
// @route  GET /tickets/id
// @access Public
const getTicket = asyncHandler(async (req, res) => {
  const ticket = await Ticket.findById(req.params.id).populate(
    'user',
    'name -_id'
  );
  console.log(ticket);
  if (ticket) {
    res.json(ticket);
  } else {
    res.status(404);
    throw new Error('Ticket not found');
  }
});

// @desc   Update ticket
// @route  PUT /tickets/id
// @access Private
const updateTicket = asyncHandler(async (req, res) => {
  const ticket = await Ticket.findById(req.params.id);
  if (ticket) {
    try {
      ticket.title = req.body.title || ticket.title;
      ticket.description = req.body.description || ticket.description;
      ticket.status = req.body.status || ticket.status;

      const updatedTicket = await ticket.save();

      res.json(updatedTicket);
    } catch (error) {
      res.status(400);
      throw new Error('Invalid ticket data');
    }
  } else {
    res.status(404);
    throw new Error('Ticket not found');
  }
});

// @desc   Delete a ticket
// @route  Delete /tickets/id
// @access Public
const deleteTicket = asyncHandler(async (req, res) => {
  const ticket = await Ticket.findById(req.params.id);
  if (ticket) {
    const deletedTicket = await ticket.delete();
    res.json(deletedTicket);
  } else {
    res.status(404);
    throw new Error('Ticket not found');
  }
});

export { getTickets, addTicket, getTicket, updateTicket, deleteTicket };
