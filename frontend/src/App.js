import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Tickets from './pages/tickets/Tickets';
import Ticket from './pages/tickets/Ticket';
import AddTicket from './pages/tickets/AddTicket';
import Users from './pages/users/Users';
import User from './pages/users/User';
import AddUser from './pages/users/AddUser';
import Messages from './pages/messages/Messages';
import Message from './pages/messages/Message';
import AddMessage from './pages/messages/AddMessage';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path='tickets' element={<Tickets />} />
          <Route path='tickets/:id' element={<Ticket />} />
          <Route path='tickets/add' element={<AddTicket />} />
          <Route path='users' element={<Users />} />
          <Route path='users/:id' element={<User />} />
          <Route path='users/add' element={<AddUser />} />
          <Route path='messages' element={<Messages />} />
          <Route path='messages/:id' element={<Message />} />
          <Route path='messages/add' element={<AddMessage />} />
        </Route>
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
