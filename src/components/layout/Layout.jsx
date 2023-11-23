import Outlet from './Outlet';
import Navbar from '../navigation/Navbar';
import SocialMedia from '../socialMediaLinks/SocialMediaLinks';

function Layout() {
  return (
    <>
      <Navbar />
      <SocialMedia />
      <Outlet />
    </>
  );
}

export default Layout;
