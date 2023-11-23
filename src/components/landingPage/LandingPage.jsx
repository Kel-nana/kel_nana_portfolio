import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import profileImg from '../../assets/profileImgCic.png';
import landingData from './landingData';

function LandingPage() {
  const boxRef = useRef();
  useEffect(() => {
    // This is called tween (between states)
    gsap.to([boxRef.current], {
      y: 23,
      duration: 3.1,
      repeat: -1,
      ease: 'bounce.out',
      yoyoEase: true,
    }); // gsap.to([boxRef.current], 2, {y: 400, repeat: 10, yoyoEase: true})
  }, []);
  return (
    <>
      <section id="/" className="pt-[60px] flex text-slate-400 back_round_color_home hover:bg-blend-darken">
        <div className=" mt-[150px] ml-[4.2%]  h-[438px] w-[40%] gap-y-4">
          <div className="box_border box_border_base home_left_section rounded-tr-3xl ml-[22.2%] mt-[-2%]" />
          <div>
            <span>{landingData.intro}</span>
            <h1 className="pt-[8px] py-[8px] font-bold text-4xl">
              {landingData.name}
              <br />
              {landingData.title}
            </h1>
            <p>{landingData.description}</p>
          </div>
        </div>
        <div className="image-container h-[438px] w-[438px] mt-[75px] ml-[8%] z-20 ">
          <div className=" h-[38px] w-[38px] bg-zinc-950 absolute top-0 left-[50%] origin-center rotate-45 z-10" />
          <div className=" h-[38px] w-[38px] bg-zinc-950 absolute bottom-0 left-[50%] origin-center rotate-45 z-10" />
          <div className=" h-[438px] w-[38px] border-slate-950 border-2 rounded-md absolute bottom-0 left-[50%] origin-center rotate-45 z-0" />
          <div className="tilt-div h-[438px] w-[38px] border-slate-950 border-2 rounded-md absolute bottom-0 left-[50%] z-0" />
          <div ref={boxRef} className="z-20 h-[228px] w-[238px] relative img_effect">
            <img src={profileImg} alt="image_portfolio" className="z-20 ml-[25%] h-[228px] w-[228px] profile_img " />
            {/* <div className="img_1 z-20 " />
            <div className="img_2 z-20" />
            <div className="img_3 z-20" />
            <div className="img_4 z-20" />
            <div className="img_5 z-20" /> */}
          </div>
        </div>
      </section>

    </>
  );
}

export default LandingPage;
