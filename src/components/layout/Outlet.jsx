import AboutMe from '../about/AboutMe';
import Work from '../work/Work';
import Contacts from '../contacts/Contacts';
import LandingPage from '../landingPage/LandingPage';

function Outlet() {
  return (
    <>
      <LandingPage />
      <AboutMe />
      <Work />
      <Contacts />
    </>
  );
}

export default Outlet;
