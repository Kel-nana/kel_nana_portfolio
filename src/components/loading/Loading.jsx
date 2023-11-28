import React from 'react';
import './loading.css';

function Loading() {
  return (
    <section className="back_round_color_home">
      <div className="loading h-[100vh]">
        <div className="loading_circle position_first" />
        <div className="loading_circle position_second" />
        <div className="loading_circle position_third" />
        <div className="loading_animation_container absolute left-[5%] bottom-[10%] w-[50%]">
          <p className="loading_text mt-[3%]">Loading</p>
          <div className="loading_animation ml-[4%]" />
          <div className="loading_animation" />
          <div className="loading_animation" />
        </div>
      </div>
    </section>
  );
}

export default Loading;
