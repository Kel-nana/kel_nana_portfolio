import AboutMe from '../about/AboutMe';
import ProjectDisplay from '../work/ProjectDisplay';
import Contacts from '../contacts/Contacts';
import LandingPage from '../landingPage/LandingPage';

function Outlet() {
  return (
    <>
      <LandingPage />
      <AboutMe />
      <ProjectDisplay />
      <Contacts />
    </>
  );
}

export default Outlet;
