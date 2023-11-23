import { motion } from 'framer-motion';
import {
  aboutMe, backEndDisplay, frontEndDisplay, toolsAndMethodsDisplay,
} from './aboutMedata';

function AboutMe() {
  return (
    <section id="about_me" className="pt-[160px] grid grid-cols-2 gap-4 h-[100vh]">
      <div className="w-[80%] ml-[10%] relative">
        <div className="border_about_me_line ml-[17%] h-[5px] w-[65%] absolute ">
          <motion.h2
            initial={{ x: 450 }}
            whileInView={{ x: [0, 550, 0] }}
            transition={{
              duration: 3,
              delay: 0.3,
            }}
            className="absolute mt-[-14%]
             text-2xl font-black border_about_me rounded-tr-3xl pt-[0.7rem] pl-[1rem] pr-[4%]"
            whileHover={{ scale: 0.9, opacity: 0.2 }}
          >
            {aboutMe.name}
          </motion.h2>
        </div>
        <div className="box_border rounded-tr-3xl ml-[55%] mt-[-5%]" />
        <p className="box_borders mt-[5%]">{aboutMe.description}</p>
      </div>
      <div className="grid grid-cols-3 gap-2">
        <div className="box_border_main rounded-tr-3xl pl-[8%] mt-[-5%]" />
        <div className="border-4 border-transparent border_color_top border_color border-4 border-transparent  rounded-tr-3xl w-[85%]">
          <div className="box_border_skills_front rounded-tr-3xl mt-[-0.3%] ml-[-0.2%]" />
          <p className="font-extrabold mb-[4%] mt-[4%] ml-[3%]">
            FRONTEND
          </p>
          <div className="ml-[3%]">
            {frontEndDisplay}
          </div>
        </div>
        <div className="border-4 border-transparent border-4 border-transparent  rounded-tr-3xl w-[90%] relative">
          <div className="box_border_skills rounded-tr-3xl ml-[2%] mt-[-18%]" />
          <div className="mt-[-16%]">
            <p className="font-extrabold mb-[4%] mt-[4%] ml-[3%]">
              TOOLS
            </p>
            <div className="ml-[3%]">
              {toolsAndMethodsDisplay}
            </div>
          </div>
        </div>
        <div className="border-4 border-transparent border-4 border-transparent  w-[85%] relative">
          <div className="box_border_skills_back rounded-tr-3xl ml-[2%] mt-[-40%]" />
          <div className="mt-[-38%]">
            <p className="font-extrabold mb-[4%] mt-[4%] ml-[3%]">
              BACKEND
            </p>
            <div className="ml-[3%]">
              {backEndDisplay}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
