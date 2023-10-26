import Outlet from './Outlet';
import Navbar from '../navigation/Navbar';

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default Layout;
