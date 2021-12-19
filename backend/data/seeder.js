import dotenv from 'dotenv';
import chalk from 'chalk';
import connectDB from '../config/db.js';

import User from '../models/userModel.js';
import Ticket from '../models/ticketModel.js';
import users from './users.js';
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

    console.log(chalk.green('Data Imported'));
    process.exit();
  } catch (error) {
    console.log(chalk.red(`${error}`));
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Ticket.deleteMany();

    console.log(chalk.red('Data Destroyed'));
    process.exit();
  } catch (error) {
    console.log(chalk.red(`${error}`));
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
