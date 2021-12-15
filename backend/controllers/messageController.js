import asyncHandler from 'express-async-handler';
import Message from '../models/messageModel.js';

// @desc   Fetch all messages
// @route  GET /messages
// @access Public
const getMessages = asyncHandler(async (req, res) => {
  const messages = await Message.find({});
  res.json(messages);
});

// @desc   Add message
// @route  POST /messages
// @access Private
const addMessage = asyncHandler(async (req, res) => {
  const { title, description, status } = req.body;

  const messageExists = await Message.findOne({ title });
  if (messageExists) {
    res.status(400);
    throw new Error('Message already exists');
  }

  const message = await Message.create({
    title,
    description,
    status,
  });

  if (message) {
    res.status(201).json({
      title: message.title,
      description: message.description,
      stats: message.status,
    });
  } else {
    res.status(400);
    throw new Error('Invalid message data');
  }
});

// @desc   Fetch a messages
// @route  GET /messages/id
// @access Public
const getMessage = asyncHandler(async (req, res) => {
  const message = await Message.findById(req.params.id);
  if (message) {
    res.json(message);
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

// @desc   Update messages
// @route  PUT /messages/id
// @access Private
const updateMessage = asyncHandler(async (req, res) => {
  const message = await Message.findById(req.params.id);
  if (message) {
    try {
      message.title = req.body.title || message.title;
      message.description = req.body.description || message.description;
      message.status = req.body.status || message.status;

      const updatedMessage = await message.save();

      res.json(updatedMessage);
    } catch (error) {
      res.status(400);
      throw new Error('Invalid message data');
    }
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

// @desc   Delete a messages
// @route  Delete /messages/id
// @access Public
const deleteMessage = asyncHandler(async (req, res) => {
  const message = await Message.findById(req.params.id);
  if (message) {
    const deletedMessage = await message.delete();
    res.json(deletedMessage);
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

export { getMessages, addMessage, getMessage, updateMessage, deleteMessage };
