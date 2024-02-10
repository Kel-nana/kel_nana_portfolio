/* eslint-disable max-len */
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import animateScrollTo from 'animated-scroll-to';
import profileImg from '../../assets/profileImg.png';
import landingData from './landingData';
import PopUp from '../../UI/PopUp';
import './landing.css';

function LandingPage(props) {
  const [trigger, setTrigger] = useState(false);
  const { breakPoint } = props;

  const popUpTrigger = () => {
    animateScrollTo(0, {
      speed: 500, // Set the scrolling speed (adjust as needed)
    });
    setTrigger(true);
  };

  const closeTrigger = (value) => {
    setTrigger(value);
  };

  // {`description pl-[48%] w-[75vw] h-[55vh] ${breakPoint > 725? 'w-[50vw]' : 'w-[75vw]'}`}
  return (
    <>
      <section id="/" className={`pt-[60px]  h-[140vh]flex text-slate-400 back_round_color_home hover:bg-blend-darken ${breakPoint > 516 ? '' : 'pb-[285px]'}`}>
        <div className="mt-[150px] ml-[4.2%]  h-[438px] w-[85vw] gap-y-4">
          <div className="box_border w-[85vw] box_border_base home_left_section rounded-tr-3xl ml-[62.2%] mt-[-2%]" />
          <div className={`w-[70%] text-${breakPoint < 876 ? 'sm' : 'xl'}`}>
            <div className="z-20 ">
              <span>{landingData.intro}</span>
            </div>
          </div>
          <div className="grid grid-cols-2 flex-col-reverse">
            <div className="absolute z-20 h-[288px] w-[248px] mt-[4vh] img_effect">
              <p className="text_normal ml-[9.5%]">{landingData.code_one}</p>
              <p className="landing_text absolute mt-[1.5%]">{landingData.code}</p>
              <p className="landing_text  mt-[17.5%] ml-[12%] text-yellow-800 font-bold">{landingData.greet}</p>
              <motion.img
                initial={{ x: 75 }}
                whileInView={{ x: [0, 180, 0] }}
                transition={{
                  duration: 3,
                  delay: 0.3,
                }}
                src={profileImg}
                alt="image_portfolio"
                className="z-20 absolute  ml-[12%] h-[228px] w-[228px] profile_img "
              />
              <p className="text_normal ml-[9.5%] pt-[30%]">{landingData.name}</p>
            </div>
            <div className="description pl-[48%] w-[75vw] h-[55vh]">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                type="button"
                className={`btn_landing absolute ${breakPoint < 725 ? 'ml-[15%] mt-[53vh] w-[37vw]' : 'ml-[20%] mt-[27vh] w-[20vw]'}`}
                onClick={popUpTrigger}
              >
                {landingData.btn}
              </motion.button>
            </div>
          </div>
        </div>
      </section>
      <div className="pop_up_body">
        <PopUp trigger={trigger} closeTrigger={closeTrigger} />
      </div>
    </>
  );
}

LandingPage.propTypes = {
  breakPoint: PropTypes.number.isRequired,
};

export default LandingPage;
