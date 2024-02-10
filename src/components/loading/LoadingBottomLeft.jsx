import React from 'react';
import { motion } from 'framer-motion';
import './loading.css';

function LoadingBottomLeft() {
  return (
    <motion.section
      initial={{ y: 0, opacity: 1 }}
      whileInView={{ y: [0, 1543], opacity: 0 }}
      transition={{
        ease: 'linear',
        duration: 24.6,
        delay: 0.1,
      }}
      className="back_round_color_home border-r-2 border-t-2 rounded-tr-md border-slate-500"
    >
      <div className="loading_animation_container back_round_color_home">
        <div className="loading_animation" />
        <div className="loading_animation" />
        <div className="loading_animation" />
      </div>
    </motion.section>
  );
}

export default LoadingBottomLeft;
