import express from 'express';
import {
  getUsers,
  addUser,
  getUser,
  updateUser,
  deleteUser,
} from '../controllers/userController.js';
import { login, register } from '../controllers/authController.js';

const router = express.Router();

router.route('/').get(getUsers).post(addUser);
router.route('/login').post(login);
router.route('/register').post(register);
router.route('/:id').get(getUser).put(updateUser).delete(deleteUser);

export default router;
