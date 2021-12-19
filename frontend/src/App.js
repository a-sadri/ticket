import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Tickets from './pages/tickets/Tickets';
import Users from './pages/users/Users';
import User from './pages/users/User';
import AddTicket from './pages/tickets/AddTicket';
import Messages from './pages/messages/Messages';
import Message from './pages/messages/Message';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path='tickets' element={<Tickets />} />
          <Route path='tickets/add' element={<AddTicket />} />
          <Route path='users' element={<Users />} />
          <Route path='users/:id' element={<User />} />
          <Route path='messages' element={<Messages />} />
          <Route path='messages/:id' element={<Message />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
