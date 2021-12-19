import bcrypt from 'bcryptjs';

const users = [
  {
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    role: 'admin',
  },
  {
    email: 'jhon@example.com',
    password: bcrypt.hashSync('123456', 10),
    role: 'supervisor',
  },
  {
    email: 'jane@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
