import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'admin',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    // role: 'admin',
  },
  {
    name: 'john',
    email: 'john@example.com',
    password: bcrypt.hashSync('123456', 10),
    // role: 'supervisor',
  },
  {
    name: 'jane',
    email: 'jane@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
