/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import animateScrollTo from 'animated-scroll-to';
import { motion } from 'framer-motion';
import {
  aboutMe, backEndDisplay, frontEndDisplay, toolsAndMethodsDisplay, iconBtn,
} from './aboutMedata';
import './aboutMe.css';

function AboutMe(props) {
  const [popUpAbout, setPopUpAbout] = useState('hidden');
  const [hideAbout, setHideAbout] = useState(false);
  const [FrontEnd, setFrontEnd] = useState('about_anime_hide');
  const [FrontEndtools, setFrontEndTools] = useState('about_anime_tools_hide');
  const [FrontEndBtn, setFrontEndBtn] = useState('about_anime_btn_hide');
  const { breakPoint } = props;

  useEffect(() => {
    const { body } = document;

    if (hideAbout) {
      body.classList.add('no-scroll');
      const timeoutIdTwo = setTimeout(() => {
        setFrontEndBtn('about_anime_btn_hide');
        setFrontEndTools('about_anime_tools_hide');
        setFrontEnd('about_anime_hide');
      }, 0);
      // Set a timeout to add the "anime" class after 300ms
      const timeoutId = setTimeout(() => {
        setFrontEndBtn('about_anime_btn');
        setFrontEndTools('about_anime_tools');
        setFrontEnd('about_anime');
      }, 300);

      // Cleanup function to clear the timeoutIdTwotimeout if the component unmounts or trigger changes
      return () => {
        body.classList.remove('no-scroll');
        clearTimeout(timeoutId);
        clearTimeout(timeoutIdTwo);
      };
    }
    body.classList.remove('no-scroll');
    setFrontEnd('');
    setFrontEndTools(''); // Reset the animation class when trigger is false
    setFrontEndBtn('');
    return undefined;
  }, [hideAbout]);
  
  const scrollValue = breakPoint < 516 ? 950 : 650;

  const openBtn = () => {
    animateScrollTo(scrollValue, {
      speed: 500, // Set the scrolling speed (adjust as needed)
    });
    setHideAbout(true);
    setPopUpAbout('open_popup');
  };

  const closeBtn = () => {
    setHideAbout(false);
    setPopUpAbout('hidden');
  };
  const [breakPointDesc, setBreakPointDesc] = useState('');
  useEffect(() => {
    if (breakPoint < 930) {
      setBreakPointDesc('responsive_text_md');
    }
    if (breakPoint > 931) {
      setBreakPointDesc('responsive_text');
    }
    if (breakPoint < 630) {
      setBreakPointDesc('responsive_text_xls');
    }
  }, [breakPoint]);
  // 536 {`mt-[5%] ${breakPoint < 930 ? 'responsive_text_md' : 'responsive_text '}`}
  // {` grid grid-row-2 gap-2 ml-[-8vw] h-[35.5vh] ${breakPoint < 412 ? 'mt-[1.5vh]' : ''}`}
  return (
    <section id="about_me" className={` grid grid-cols-2 gap-4 h-[100vh] ${breakPoint > 516 ? 'pt-[160px]' : 'pt-[180px]'}`}>
      <div className={` ${hideAbout ? 'hidden ' : ''}`}>
        <div className={`ml-[10%] relative ${breakPoint < 930 ? 'w-[80vw]' : 'w-[80%]'}`}>

          <motion.h2
            initial={{ x: 450 }}
            whileInView={{ x: [0, 180, 0] }}
            transition={{
              duration: 3,
              delay: 0.3,
            }}
            className={`absolute mt-[-14%] text-2xl font-black border_about_me rounded-tr-3xl pt-[0.7rem] pl-[1rem] pr-[4%]  ${breakPoint < 931 ? 'responsive_text_lg' : 'responsive_text_titles'}`}
            whileHover={{ scale: 0.9, opacity: 0.2 }}
          >
            {aboutMe.name}
          </motion.h2>

          <div className="box_border rounded-tr-3xl ml-[55%] mt-[-5%]" />
          <div className={breakPoint < 691 ? 'pb-[4vh]' : 'pb-[1vh]'}>
            <p className={`mt-[5%] text-slate-400  ${breakPointDesc}`}>{aboutMe.description}</p>
          </div>
          <div className={`ml-[60%]   ${breakPoint > 930 ? 'hidden' : ''}`}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              type="button"
              className={`span_tech_name ${breakPointDesc}`}
              onClick={openBtn}
            >
              {aboutMe.tech}
            </motion.button>
            <div className={` grid grid-row-2 gap-2 ml-[-8vw] h-[35.5vh] ${breakPoint < 413 ? 'mt-[1.5vh]' : ''}`}>
              <div
                className={` btn_about_me pt-[25px] absolute ${breakPoint < 529 ? 'w-[42vw]' : 'w-[30vw]'}`}
              >
                {iconBtn}
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                type="button"
                className={` btn_view absolute ${breakPoint < 529 ? 'w-[44vw]' : 'w-[30vw]'}`}
                onClick={openBtn}
              >
                {aboutMe.view}
              </motion.button>
            </div>
            {/* <p className="pt-[5px] btn_view">VIEIW MORE</p> */}

          </div>

        </div>
      </div>
      <div className={`grid grid-cols-3 gap-2 ${breakPoint < 930 ? popUpAbout : ''}`}>
        <div className="box_border_main rounded-tr-3xl pl-[8%] mt-[-5%]" />
        <div className={`border-4 border-transparent border_color_top border_color border-4 border-transparent  rounded-tr-3xl w-[85%] ${hideAbout ? FrontEnd : ''}`}>
          <div className={`box_border_skills_front rounded-tr-3xl ${breakPoint < 930 ? 'ml-[13.8%] mt-[-0.5%]' : 'ml-[-0.2%] mt-[-0.3%]'}`} />
          <p className="font-extrabold mb-[4%] mt-[4%] ml-[3%]">
            FRONTEND
          </p>
          <div className="ml-[3%]">
            {frontEndDisplay}
          </div>
        </div>
        <div className={`border-4 border-transparent border-4 border-transparent  rounded-tr-3xl w-[90%] relative ${hideAbout ? FrontEndtools : ''}`}>
          <div className="box_border_skills rounded-tr-3xl ml-[2%] mt-[-18%]" />
          <div className="mt-[-16%]">
            <p className="font-extrabold mb-[4%] mt-[4%] ml-[3%]">
              TOOLS
            </p>
            <div className="ml-[3%]">
              {toolsAndMethodsDisplay}
            </div>
          </div>
        </div>
        <div className={`border-4 border-transparent border-4 border-transparent  w-[85%] relative ${hideAbout ? FrontEndtools : ''}`}>
          <div className="box_border_skills_back rounded-tr-3xl ml-[2%] mt-[-40%]" />
          <div className="mt-[-38%]">
            <p className="font-extrabold mb-[4%] mt-[4%] ml-[3%]">
              BACKEND
            </p>
            <div className="ml-[3%]">
              {backEndDisplay}
            </div>
          </div>
        </div>
        <div>
          <div className={`mt-[-20vh] ml-[44vw] ${breakPoint > 930 ? 'hidden' : ''}`}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              type="button"
              className={` btn_landing btn_about absolute ${hideAbout ? FrontEndBtn : ''}`}
              onClick={closeBtn}
            >
              {aboutMe.name}
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}

AboutMe.propTypes = {
  breakPoint: PropTypes.number.isRequired,
};

export default AboutMe;
