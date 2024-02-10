/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import Loading from './loading/Loading';
import LoadingTop from './loading/LoadingTop';
import LoadingBottomLeft from './loading/LoadingBottomLeft';
import LoadingTopRight from './loading/LoadingTopRight';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [windowSize, setWindowSize] = useState([window.innerWidth]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth]);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  useEffect(() => {
    // Simulate loading for 2 seconds
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  console.log(windowSize, 'windowSize');
  useEffect(() => {
    gsap.set('.ball', { xPercent: -50, yPercent: -50 });
    const targets = gsap.utils.toArray('.ball');
    window.addEventListener('mousemove', (e) => {
      gsap.to(targets, {
        duration: 0.5,
        x: e.clientX,
        y: e.clientY,
        ease: 'power1.out',
        overwrite: 'auto',
        stagger: 0.02,
      });
    });
  });
  return (
    <>
      {/* <Layout />LoadingBottomLeft LoadingTopRight */}
      {isLoading ? (
        <div className="loading loading_bg grid grid-cols-2 grid-rows-2 gap-2 h-[100vh] w-[99vw] back_round_color_home">
          <LoadingTop isLoading={isLoading} />
          <LoadingTopRight isLoading={isLoading} />
          <LoadingBottomLeft />
          <Loading isLoading={isLoading} />
        </div>
      ) : (
        <div className="min-h-screen bg-black copy_selection ">
          <div className="ball cursor_color_end cursor_color_styles w-6 h-6 fixed top-0 left-0 rounded-full" />
          <div className="ball cursor_color_middle cursor_color_styles w-10 h-10 fixed top-0 left-0 rounded-full" />
          <div className="ball cursor_color cursor_color_styles w-14 h-14 fixed top-0 left-0 rounded-full" />
          <Routes>
            <Route path="/" element={<Layout breakPoint={windowSize[0]} />} />
          </Routes>
        </div>
      )}

    </>
  );
}

export default App;
