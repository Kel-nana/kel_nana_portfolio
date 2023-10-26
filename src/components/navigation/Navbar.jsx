import React, { useEffect, useState } from 'react';
import { Link as NavLinks, animateScroll as scroll } from 'react-scroll';

const links = [
  { path: 'landing_Page', text: 'Landing Page', click: 'to="/" onClick={toggleHome}' },
  { path: 'about_me', text: 'About Me' },
];

function Navbar() {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <nav className={`navbar ${scrollNav ? 'scrollNav' : ''}`}>
      <button type="button" onClick={toggleHome}>Kel_nana</button>
      <section>

        <ul>
          {links.map((link) => (
            <li key={link.text}>
              <NavLinks
                to={link.path}
                smooth
                duration={500}
                spy
                exact="true"
              >
                {link.text}
              </NavLinks>
            </li>
          ))}
        </ul>
      </section>
    </nav>
  );
}
export default Navbar;
