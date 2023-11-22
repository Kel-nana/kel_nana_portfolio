/* eslint-disable react/no-array-index-key */
import works from './workData';
// back_round_color_home
const projects = works.map((work) => (
  <div key={work.name} className="w-[70vw] h-[80vh]   rounded-3xl ml-[5%] text-slate-300">
    <div className=" mb-[5px] ">
      <div>
        <p className="ml-[75%] w-[10%] border-right rounded-3xl flex justify-center my-5">{work.id}</p>
        <div className="grid grid-cols-2 gap-2 w-[75vw] h-[38vh] ">
          <div className="ml-[5%]">
            <p>{work.name}</p>
            <p className="mt-[5vh] pr-[1.2%] w-[97%]">{work.description}</p>
          </div>
          <div>
            <img
              key={work.name}
              src={work.imageSrc}
              alt="Projects"
              className="z-20  h-[35vh] w-[30vw] rounded-lg border-2  p-[3.5px]"
            />
          </div>
          <div className="border_styles_image image_section rounded-br-3xl ml-[77.2%] mt-[2.7%]" />
        </div>
        <div className="ml-[48.5%] links_container pl-[2%] rounded-3xl">
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
          <p className="mt-[1.4%]">{work.date}</p>
          <p className="mt-[1.4%]">{work.stack}</p>
        </div>
      </div>
      <div className="ml-[6vw] tech_container pl-[1%] rounded-3xl">
        <p className="ml-[1.2vw]">TECHNOLOGIES:</p>
        {work.technologies.map((tech, index) => <span className="ml-[1.2vw]" key={index}>{tech}</span>) }
      </div>
    </div>
  </div>
));

export default projects;
