import { Outlet } from 'react-router';

const Layout = () => {
  return (
    <div>
      <h2>Layout</h2>
      <Outlet />
    </div>
  );
};

export default Layout;
