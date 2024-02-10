import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import './loading.css';

function LoadingTopRight(props) {
  const { isLoading } = props;

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        document.documentElement.style.setProperty('--stroke-dasharray-two', '0');
      }, 44445000);
    }
  }, [isLoading]);

  return (
    <motion.section
      initial={{ y: 0, opacity: 1 }}
      whileInView={{ y: [0, -1543], opacity: 0 }}
      transition={{ ease: 'linear', duration: 24.6, delay: 0.1 }}
      className="back_round_color_home border-l-2 border-b-2 rounded-bl-md border-slate-500"
    >
      <div className="relative loading_circle_container back_round_color_home h-[50vh] w-[99%]">
        <div className="loading_top_right">
          <svg
            width="120"
            height="120"
            viewBox="0 0 29 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="path_right"
              d="M14.3564 0L28.2128 24H0.5L14.3564 0Z"
            />
            <defs>
              <linearGradient id="paint0_linear_742_347" x1="3.35641" y1="18" x2="25.8564" y2="18" gradientUnits="userSpaceOnUse">
                <stop stopColor="#E5B1EE" />
                <stop offset="0.517791" stopColor="#D9D9D9" />
                <stop offset="0.9999" stopColor="#57859C" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </motion.section>
  );
}

LoadingTopRight.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

export default LoadingTopRight;
