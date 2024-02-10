/* eslint-disable max-len */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import './loading.css';

function LoadingTop(props) {
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
      whileInView={{ x: [0, -1543], opacity: 0 }}
      transition={{
        ease: 'linear',
        duration: 27.6,
        delay: 0.1,
      }}
      className="back_round_color_home border-r-2 border-b-2 rounded-br-md border-slate-500"
    >
      <div className="top_div h-[46vh] w-[92%] back_round_color_home">
        <div className="loading_top_right">
          <svg xmlns="http://www.w3.org/2000/svg" fill="#064e3b" version="1.1" id="Capa_1" width="120" height="120" viewBox="0 0 445.873 445.872">
            <g>
              <g>
                <path className="path" d="M222.937,445.872C100.007,445.872,0,345.862,0,222.936C0,100.007,100.007,0,222.937,0    c122.926,0,222.936,100.007,222.936,222.936C445.873,345.862,345.863,445.872,222.937,445.872z M222.937,18.157    c-112.911,0-204.779,91.868-204.779,204.779c0,112.914,91.868,204.779,204.779,204.779c112.913,0,204.778-91.865,204.778-204.779    C427.715,110.025,335.85,18.157,222.937,18.157z" />
              </g>
            </g>
          </svg>
        </div>
      </div>
    </motion.section>
  );
}

LoadingTop.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

export default LoadingTop;
