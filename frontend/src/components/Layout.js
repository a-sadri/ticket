import { Outlet } from 'react-router';
import Header from './Header';

const Layout = () => {
  return (
    <div className='container mx-auto'>
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
