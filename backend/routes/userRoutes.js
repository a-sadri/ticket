import express from 'express';
import { getUsers, addUser } from '../controllers/userController.js';

const router = express.Router();

router.route('/').get(getUsers).post(addUser);

export default router;
