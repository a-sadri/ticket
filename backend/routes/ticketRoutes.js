import express from 'express';
import {
  getTickets,
  addTicket,
  getTicket,
  updateTicket,
  deleteTicket,
} from '../controllers/ticketController.js';

const router = express.Router();

router.route('/').get(getTickets).post(addTicket);
router.route('/:id').get(getTicket).put(updateTicket).delete(deleteTicket);

export default router;
