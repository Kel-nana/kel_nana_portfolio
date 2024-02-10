import React, {
  useEffect, useState, useRef, useLayoutEffect,
} from 'react';
import PropTypes from 'prop-types';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';
import { Link as NavLinks, animateScroll as scroll } from 'react-scroll';
import { AiOutlineClose } from 'react-icons/ai';
import { HiMenuAlt4 } from 'react-icons/hi';
import { onEnter, onLeave, links } from './NavUtil';

// import { BiMenuAltRight } from "react-icons/bi";

function Navbar(props) {
  const [scrollNav, setScrollNav] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navBar, setNavBar] = useState('');
  const linkRef = useRef();
  const { breakPoint } = props;
  // Desktop screen navbar breaking point
  // breaking points 1242 592 navbar drop 876 page structure
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('li.nav_links', {
        y: -150,
      });
      setTimeout(() => {
        gsap.to('li.nav_links1', {
          y: 65,
          duration: 0.45,
          ease: 'bounce.inOut',
        });
      }, 200);
    }, linkRef);
    return () => ctx.revert();
  }, []);

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (breakPoint < 391) {
      setNavBar('ml-[40vw]');
    }
    if (breakPoint > 664) {
      setNavBar('ml-[70vw]');
    }
    if (breakPoint < 664) {
      setNavBar('ml-[55vw]');
    }
    if (breakPoint < 431) {
      setNavBar('ml-[45vw]');
    }
  }, [breakPoint]);
  // {` ${breakPoint < 644 ? 'ml-[55vw]' : 'ml-[65vw]'}`}
  return (
    <nav className={`navbar justify-between z-50 shadow-md border-y-stone-900 border-y-4 fixed flex h-[14vh] top-0 left-0 mx-auto w-[100vw] px-2 sm:px-6 lg:px-8 ${scrollNav ? 'scrollNav' : ''}`}>
      <NavLinks className="justify-center mt-[18px] h-[50px] rounded-lg border-slate-200 border-2 rounded-md flex items-center pl-[1.6rem] pr-[1.6rem]" type="button" to="/" onClick={toggleHome}>Kel_nana</NavLinks>
      <section className={` ${breakPoint < 1242 ? 'hidden' : 'ml-[50vw]'}`}>
        <ul className=" flex items-center space-x-6 rounded-lg border-slate-200 border-2 rounded-md h-[50px] mt-[18px] w-[35vw] justify-center" ref={linkRef}>
          {links.map((link) => (
            <li className={` border-slate-200 border-2 rounded-md px-1.5 mb-[130px] ${link.class}`} onMouseEnter={onEnter} onMouseLeave={onLeave} key={link.text}>
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
      <div className={navBar}>
          <HiMenuAlt4
            onClick={toggleMenu}
            className={`absolute mt-[4vh] text-3xl${
              isMenuOpen ? 'w-[0] h-[]0' : ' '
            }`}
          />

        </div>
      <section className={`${ isMenuOpen ? 'absolute nav_ul' : 'pointer-events-none '
          }  `}>
        <div className={`${breakPoint > 1242 ? 'hidden' : 'h-[95vh] w-[75vw]'} `}>
        {/* <div className={navBar}>
          <HiMenuAlt4
            onClick={toggleMenu}
            id={`${
              isMenuOpen ? '' : 'nav_harm '
            }`}
            className={`absolute mt-[4vh] text-3xl${
              isMenuOpen ? 'w-[0] h-[]0' : ' '
            }`}
          />

        </div> */}
        <motion.ul
          initial={{ y: -543, opacity: 0 }}
          whileInView={{ y: [-543, 0], opacity: 1 }}
          transition={{
            ease: 'linear',
            duration: 1.2,
            delay: 0.1,
          }}
          className={` grid grid-row-4 mobileNav pt-[7vh] rounded-lg border-x-stone-900 border-x-4 h-[94vh] w-[70vw] justify-center transition-transform ease-in-out duration-500 ${
            isMenuOpen ? '' : 'hidden'
          }  `}
        >
          <div><AiOutlineClose onClick={toggleMenu} className="absolute ml-[32.27vw] mt-[-2vh] text-3xl" /></div>
          {links.map((link) => (
            <motion.li
              initial={{ x: 243, opacity: 0 }}
              whileInView={{ x: [243, 0], opacity: 1 }}
              transition={{
                duration: 1.4,
                delay: 0.26,
              }}
              className={`btnNav hover:scale-125 border-slate-200 border-2 rounded-md h-[6vh] w-[200px] text-center ${link.class}`}
              // onMouseEnter={onEnter}
              // onMouseLeave={onLeave}
              key={link.text}
              >
              <NavLinks
                to={link.path}
                smooth
                duration={500}
                spy
                exact="true"
                onClick={toggleMenu}
                className="btn_link_mobile"
                >
                {link.text}
              </NavLinks>
            </motion.li>
          ))}
        </motion.ul>
        </div>
      </section>
    </nav>
  );
}

Navbar.propTypes = {
  breakPoint: PropTypes.number.isRequired,
};

export default Navbar;
