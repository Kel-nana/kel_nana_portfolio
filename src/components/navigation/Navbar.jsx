import React, { useEffect, useState } from 'react';
import { Link as NavLinks, animateScroll as scroll } from 'react-scroll';

const links = [
  { path: '/', text: 'Landing Page' },
  { path: 'about_me', text: 'About Me' },
  { path: 'work', text: 'Projects' },
  { path: 'contact', text: 'Contacts' },
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

  // Return from blogs page btn work in prog
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <nav className={`navbar fixed flex h-16 top-0 left-0 mx-auto w-[100%] px-2 sm:px-6 lg:px-8 ${scrollNav ? 'scrollNav' : ''}`}>
      <NavLinks className="pr-[60%]" type="button" to="/" onClick={toggleHome}>Kel_nana</NavLinks>
      <section>

        <ul className=" flex items-center space-x-6 ">
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
