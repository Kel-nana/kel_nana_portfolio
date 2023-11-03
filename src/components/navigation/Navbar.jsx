import React, {
  useEffect, useState, useRef, useLayoutEffect,
} from 'react';
import { gsap } from 'gsap';
import { Link as NavLinks, animateScroll as scroll } from 'react-scroll';

const links = [
  { path: '/', text: 'Landing Page', class: 'nav_links nav_links1' },
  { path: 'about_me', text: 'About Me', class: 'nav_links nav_links1' },
  { path: 'work', text: 'Projects', class: 'nav_links nav_links1' },
  { path: 'contact', text: 'Contacts', class: 'nav_links nav_links1' },
];

function Navbar() {
  const [scrollNav, setScrollNav] = useState(false);
  const linkRef = useRef();
  // const backLinkRef = useRef();
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('li.nav_links', {
        y: -150,
      });
      setTimeout(() => {
        gsap.to('li.nav_links1', {
          y: 65,
        });
      }, 200);
    }, linkRef);
    return () => ctx.revert();
  }, []);

  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, { backgroundColor: '#C0C0C0', scale: 1.2 });
  };

  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { backgroundColor: '#D3D3D3', scale: 1 });
  };

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
    <nav className={`navbar shadow-md bg-slate-100 border-slate-200 border-2 fixed flex h-[14vh] top-0 left-0 mx-auto w-[100%] px-2 sm:px-6 lg:px-8 ${scrollNav ? 'scrollNav' : ''}`}>
      <NavLinks className="justify-center mr-[56%] mt-[18px] h-[50px] rounded-lg border-slate-200 border-2 rounded-md flex items-center pl-[1.6rem] pr-[1.6rem]" type="button" to="/" onClick={toggleHome}>Kel_nana</NavLinks>
      <section>

        <ul className=" flex items-center space-x-6  rounded-lg border-slate-200 border-2 rounded-md h-[50px] mt-[18px] w-[35vw] justify-center" ref={linkRef}>
          {links.map((link) => (
            <li className={` border-slate-200 border-2 rounded-md px-1.5 mb-[130px] ${link.class}`} onMouseEnter={onEnter} onMouseLeave={onLeave} key={link.text}>
              <NavLinks
                to={link.path}
                ref={linkRef}
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
