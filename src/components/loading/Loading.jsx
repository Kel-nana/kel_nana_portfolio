import React from 'react';
import './loading.css';

function Loading() {
  return (
    <section className="bg-black">
      <div className="loading grid grid-cols-2 gap-2 h-[100vh] w-[99vw]">
        <div className="top_div h-[46vh] w-[92%] back_round_color_home" />
        <div className="loading_circle_container back_round_color_home h-[50vh] w-[99%]">
          <div className="loading_circle position_first" />
          <div className="loading_circle position_second" />
          <div className="loading_circle position_third" />
        </div>
        <div className="loading_animation_container w-[92%] back_round_color_home">
          <p className="loading_text mt-[23%] ml-[25%]">Loading</p>
          <div className="loading_animation ml-[4%]" />
          <div className="loading_animation" />
          <div className="loading_animation" />
        </div>
        <div className="bottom_div h-[44vh] w-[99%] mt-[4%] back_round_color_home" />
      </div>
    </section>
  );
}

export default Loading;
