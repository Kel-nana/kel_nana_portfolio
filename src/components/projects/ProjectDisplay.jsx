import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import projects from './project';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './project.css';

function Project() {
  const [toggleStack, setToggleStack] = useState(true);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handleClick = (projectId) => {
    if (projectId === 'Front_End') {
      setToggleStack(false);
    } else {
      setToggleStack(true);
    }
  };

  return (
    <section id="project" className="pt-[90px] h-[100vh] back_round_color_home">
      <div className="grid grid-cols-3 gap-2 mt-[3vh] w-[90vw] h-[39vh] ">
        <div className="ml-[25%] w-[80vw]">
          <div className="border_styles outter_border rounded-tr-3xl ml-[5%] mt-[-1%]" />
          <motion.h2
            initial={{ x: 450 }}
            whileInView={{ x: [0, 255, 0] }}
            transition={{
              duration: 3,
              delay: 0.3,
            }}
            className="absolute mt-[0.5%] ml-[1%] pr-[4%] text-2x l font-black border_about_me rounded-tr-3xl pt-[0.7rem] pl-[3.8rem]"
            whileHover={{ scale: 0.9, opacity: 0.2 }}
          >
            {toggleStack ? 'FRONTEND' : 'BACKEND'}
          </motion.h2>
          <div className="border_styles_right left_section rounded-tr-3xl ml-[21.2%] mt-[2%]" />
          <div className="border_styles right_section rounded-tr-3xl ml-[40.6%] mt-[1%]" />
          <div className="border_styles_image bottom_section rounded-3xl ml-[38.59%] mt-[-1%]" />
          <Slider
            dots={settings.dots}
            infinite={settings.infinite}
            speed={settings.speed}
            slidesToShow={settings.slidesToShow}
            slidesToScroll={settings.slidesToScroll}
          >
            {projects(handleClick, toggleStack)}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default Project;
