import express from 'express';
import {
  getMessages,
  addMessage,
  getMessage,
  updateMessage,
  deleteMessage,
} from '../controllers/messageController.js';

const router = express.Router();

router.route('/').get(getMessages).post(addMessage);
router.route('/:id').get(getMessage).put(updateMessage).delete(deleteMessage);

export default router;
