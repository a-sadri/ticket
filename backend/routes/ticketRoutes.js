import express from 'express';
import { getTickets, addTicket } from '../controllers/ticketController.js';

const router = express.Router();

router.route('/').get(getTickets).post(addTicket);

export default router;
