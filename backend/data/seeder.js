import dotenv from 'dotenv';
import chalk from 'chalk';
import connectDB from '../config/db.js';

import Ticket from '../models/ticketModel.js';
import tickets from './tickets.js';

dotenv.config();
connectDB();

const importData = async () => {
  try {
    await Ticket.deleteMany();

    const createUsers = await User.insertMany(users);
    const userSample = await createUsers[0]._id;

    const ticketsAssign = tickets.map((ticket) => {
      return { ...ticket, user: userSample };
    });

    await Ticket.insertMany(ticketsAssign);

    chalk.green(console.log('Data Imported'));
    process.exit();
  } catch (error) {
    chalk.red(console.log(`${error}`));
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Ticket.deleteMany();

    chalk.red(console.log('Data Destroyed'));
    process.exit();
  } catch (error) {
    chalk.red(console.log(`${error}`));
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
