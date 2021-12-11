import { Outlet } from 'react-router';
import Header from './Header';

const Layout = () => {
  return (
    <>
      <Header />
      <div className='container mx-auto'>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
