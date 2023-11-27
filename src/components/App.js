import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import Loading from './loading/Loading';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 2 seconds
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

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
  }, []);
  return (
    <>
      {/* <Layout /> */}
      {isLoading ? (
        <Loading />
      ) : (
        <div className="min-h-screen bg-black copy_selection ">
          <div className="ball cursor_color_end cursor_color_styles w-6 h-6 fixed top-0 left-0 rounded-full" />
          <div className="ball cursor_color_middle cursor_color_styles w-10 h-10 fixed top-0 left-0 rounded-full" />
          <div className="ball cursor_color cursor_color_styles w-14 h-14 fixed top-0 left-0 rounded-full" />
          <Routes>
            <Route path="/" element={<Layout />} />
          </Routes>
        </div>
      )}

    </>
  );
}

export default App;
