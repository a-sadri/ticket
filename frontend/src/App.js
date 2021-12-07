import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Tickets from './pages/tickets/Tickets';
import AddTicket from './pages/tickets/AddTicket';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path='tickets' element={<Tickets />} />
          <Route path='tickets/add' element={<AddTicket />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
