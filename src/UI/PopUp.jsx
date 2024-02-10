/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import landingData from '../components/landingPage/landingData';
import './popUp.css';

function PopUp(props) {
  const [dropAnimation, setDropAnimation] = useState();
  const { trigger, closeTrigger } = props;
  console.log(trigger, 'trigger');
  const closeBtn = () => {
    closeTrigger(false);
  };

  // Add and remove the 'no-scroll' class on the body element
  // ...
  // ...
  useEffect(() => {
    const { body } = document;

    if (trigger) {
      body.classList.add('no-scroll');

      // Set a timeout to add the "anime" class after 300ms
      const timeoutId = setTimeout(() => {
        setDropAnimation('anime');
      }, 100);

      // Cleanup function to clear the timeout if the component unmounts or trigger changes
      return () => {
        body.classList.remove('no-scroll');
        clearTimeout(timeoutId);
      };
    }
    body.classList.remove('no-scroll');
    setDropAnimation(''); // Reset the animation class when trigger is false
    return undefined;
  }, [trigger]);
  // ...
  // ...

  // `application application  ml-[8%] absolute text-slate ${trigger === false ? 'mt-[-100vh]' : 'mt-[-100vh]'}`
  return (
    <div
      className={`pop_up_container back_drop absolute text-slate-400 pt-[160px] w-[100vw] h-100vh ${trigger === false ? 'hidden' : ''}`}
    >
      <div className="pop_up_letter letter_folder" />
      <div className="pop_up_letter letter_folder_two" />
      <div
        className={` application absolute text-slate ml-[8vw] ${trigger === false ? '' : dropAnimation}`}
      >
        <div className=" w-[75vw] h-[15vh]">
          <h1 className="pt-[8px]  font-bold text-4xl">
            {/* {landingData.name}
          <br /> */}
            {landingData.title}
          </h1>
        </div>
        <div className="pop_up_container w-[90%] h-[50vh] ">
          <p className="w-[70%]">{landingData.description}</p>
          <div className="ml-[40%] ">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              type="button"
              className="btn_landing  absolute ml-[20%]  "
              onClick={closeBtn}
            >
              {landingData.btn_two}
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}

PopUp.propTypes = {
  trigger: PropTypes.bool.isRequired,
  closeTrigger: PropTypes.func.isRequired,
};
export default PopUp;
