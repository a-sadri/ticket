import express from 'express';
import { addTicket } from '../controllers/ticketController.js';

const router = express.Router();

router.route('/').post(addTicket);

export default router;
