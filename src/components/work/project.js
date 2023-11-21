/* eslint-disable react/no-array-index-key */
import works from './workData';

const projects = works.map((work) => (
  <div key={work.name} className="w-[70vw] h-[80vh] absolute back_round_color_home border-slate-300 border-2 rounded-3xl ml-[15%] text-slate-300">
    <div className=" mb-[5px] back_round_color_home">
      <div>
        <p className="ml-[87%] w-[10%] border-slate-300 border-2 rounded-3xl flex justify-center my-3">{work.id}</p>
        <div className="grid grid-cols-2 gap-2 w-[75vw] h-[38vh] ">
          <div className="ml-[5%]">
            <div className="border_styles_right left_section rounded-tr-3xl ml-[23.5%] mt-[-4%]" />
            <div className="border_styles right_section rounded-tr-3xl ml-[50.6%] mt-[-1%]" />
            <p>{work.name}</p>
            <p className="mt-[5vh] w-[97%]">{work.description}</p>
          </div>
          <div>
            <img
              key={work.name}
              src={work.imageSrc}
              alt="Projects"
              className="z-20  h-[35vh] w-[30vw] rounded-lg border-2  p-[3.5px]"
            />
          </div>
        </div>
        <div className="ml-[55%]">
          <div className=" grid grid-row-2 gap-2">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={work.liveVersionLink}
            >
              <p>
                DEPLOYED LINK:
                <span className="ml-[1.2vw] link_color">
                  Live Version Link
                </span>
              </p>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={work.SourceLink}
            >
              <p>
                CODE:
                <span className="ml-[1.2vw] link_color">
                  Source Code Link
                </span>
              </p>
            </a>
          </div>
          <p className="mt-[1.4vh]">{work.date}</p>
          <p className="mt-[1.4vh]">{work.stack}</p>
        </div>
      </div>
      <div className="ml-[1vw]">
        {work.technologies.map((tech, index) => <span className="ml-[1.2vw]" key={index}>{tech}</span>) }
      </div>
    </div>
  </div>
));

export default projects;
