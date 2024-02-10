import PropTypes from 'prop-types';
import AboutMe from '../about/AboutMe';
import ProjectDisplay from '../projects/ProjectDisplay';
import Contacts from '../contacts/Contacts';
import LandingPage from '../landingPage/LandingPage';

function Outlet(props) {
  const { breakPoint } = props;
  return (
    <>
      <LandingPage breakPoint={breakPoint} />
      <AboutMe breakPoint={breakPoint} />
      <ProjectDisplay breakPoint={breakPoint} />
      <Contacts breakPoint={breakPoint} />
    </>
  );
}

Outlet.propTypes = {
  breakPoint: PropTypes.number.isRequired,
};

export default Outlet;

// its okay to rest kel nana
