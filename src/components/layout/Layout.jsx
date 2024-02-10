import React from 'react';
import PropTypes from 'prop-types';
import Outlet from './Outlet';
import Navbar from '../navigation/Navbar';
import SocialMedia from '../socialMediaLinks/SocialMediaLinks';

function Layout(props) {
  const { breakPoint } = props;
  console.log(breakPoint, 'breakpoint');
  return (
    <>
      <Navbar breakPoint={breakPoint} />
      <SocialMedia />
      <Outlet breakPoint={breakPoint} />
    </>
  );
}

Layout.propTypes = {
  breakPoint: PropTypes.number.isRequired,
};

export default Layout;
