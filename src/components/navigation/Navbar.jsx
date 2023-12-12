import React, {
  useEffect, useState, useRef, useLayoutEffect,
} from 'react';
import { gsap } from 'gsap';
import { Link as NavLinks, animateScroll as scroll } from 'react-scroll';
import { onEnter, onLeave, links } from './Navlinks';
// import { BiMenuAltRight } from "react-icons/bi";
// import { HiMenuAlt4 } from 'react-icons/hi';
// import { AiOutlineClose } from 'react-icons/ai';

function Navbar() {
  const [scrollNav, setScrollNav] = useState(false);
  const linkRef = useRef();
  const [windowSize, setWindowSize] = useState([window.innerWidth]);

  // Desktop screen navbar breaking point
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth]);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  console.log(windowSize);
  // 1242
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

  return (
    <nav className={`navbar  z-50 shadow-md border-y-stone-900 border-y-4 fixed flex h-[14vh] top-0 left-0 mx-auto w-[100%] px-2 sm:px-6 lg:px-8 ${scrollNav ? 'scrollNav' : ''}`}>
      <NavLinks className="justify-center mr-[51%] mt-[18px] h-[50px] rounded-lg border-slate-200 border-2 rounded-md flex items-center pl-[1.6rem] pr-[1.6rem]" type="button" to="/" onClick={toggleHome}>Kel_nana</NavLinks>
      <section className={` ${windowSize < 1242 ? 'hidden' : ''}`}>
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
    </nav>
  );
}

export default Navbar;
