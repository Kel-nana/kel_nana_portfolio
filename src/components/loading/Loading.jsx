/* eslint-disable max-len */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import './loading.css';

function Loading(props) {
  const { isLoading } = props;

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        document.documentElement.style.setProperty('--stroke-dasharray', '0');
      }, 44445000);
    }
  }, [isLoading]);
  return (
    <motion.section
      initial={{ x: 0, opacity: 1 }}
      whileInView={{ x: [0, 1543], opacity: 0 }}
      transition={{
        ease: 'linear',
        duration: 27.6,
        delay: 0.1,
      }}
      className="back_round_color_home border-t-2 border-l-2 rounded-tl-md border-slate-500"
    >
      <div className="loading_top_right">
        <div className="load_bottom">
          <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="100" height="100" viewBox="0 0 1280.000000 1278.000000" preserveAspectRatio="xMidYMid meet">
            <path className="path_bottom" stroke="#064e3b" d="M1438 12630 c-331 -30 -643 -176 -879 -411 -205 -205 -345 -477 -396 -769 -17 -101 -18 -309 -18 -5060 0 -4751 1 -4959 18 -5060 105 -602 556 -1053 1167 -1167 90 -17 351 -18 5070 -18 4719 0 4980 1 5070 18 302 56 564 191 771 398 205 205 345 477 396 769 17 101 18 309 18 5060 0 4751 -1 4959 -18 5060 -79 455 -361 834 -774 1039 -107 53 -249 100 -383 128 -80 16 -386 17 -5020 19 -2714 1 -4974 -2 -5022 -6z m9930 -648 c89 -27 198 -80 261 -126 111 -81 214 -215 270 -350 66 -158 61 244 61 -5086 0 -5306 4 -4923 -59 -5079 -97 -237 -279 -403 -531 -483 l-75 -23 -4925 0 c-4728 0 -4928 1 -4990 18 -272 76 -487 285 -572 557 l-23 75 0 4930 c0 4733 1 4933 18 4995 85 302 342 539 640 589 29 5 2184 8 4952 7 l4900 -1 73 -23z">
              <animate
                attributeName="fill"
                from="#14110F"
                to="#064e3b"
                begin="0s"
                dur="3s"
                fill="#064e3b"
                repeatCount="indefinite"
              />
            </path>
            <rect x="0" y="0" width="40%" height="120" fill="#064e3b" className="ml-[2vw]">
              {/* <animate
                attributeType="XML"
                attributeName="x"
                from="0"
                to="40%"
                begin="0s"
                dur="3s"
                repeatCount="indefinite"
              /> */}
              <animate
                attributeType="XML"
                attributeName="width"
                from="0"
                to="40%"
                begin="0s"
                dur="3s"
                repeatCount="indefinite"
              />
            </rect>
          </svg>
        </div>
      </div>
      <div className="bottom_div h-[44vh] w-[99%] mt-[4%] back_round_color_home" />
      {/* </div> */}
    </motion.section>
  );
}

Loading.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

export default Loading;
