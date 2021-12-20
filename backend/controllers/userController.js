import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';

// @desc   Fetch all users
// @route  GET /users
// @access Public
const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// @desc   Add user
// @route  POST /users
// @access Private
const addUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    res.status(201).json({
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});

// @desc   Fetch a user
// @route  GET /users/id
// @access Public
const getUser = asyncHandler(async (req, res) => {
  console.log(req.params.id);
  const user = await User.findById(req.params.id);
  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

// @desc   Update user
// @route  PUT /users/id
// @access Private
const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (user) {
    try {
      user.title = req.body.title || user.title;
      user.description = req.body.description || user.description;
      user.status = req.body.status || user.status;

      const updatedUser = await user.save();

      res.json(updatedUser);
    } catch (error) {
      res.status(400);
      throw new Error('Invalid user data');
    }
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

// @desc   Delete a user
// @route  Delete /users/id
// @access Public
const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (user) {
    const deletedUser = await user.delete();
    res.json(deletedUser);
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

export { getUsers, addUser, getUser, updateUser, deleteUser };
