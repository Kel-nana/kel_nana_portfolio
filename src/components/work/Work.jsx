import projects from './project';
import './work.css';

function Work() {
  return (
    <section id="work" className="pt-[90px] h-[100vh] back_round_color_home">
      <div className="grid grid-cols-3 gap-2 mt-[3vh] w-[90vw] h-[40vh] overflow-hidden">
        <div className="border_styles outter_border rounded-tr-3xl ml-[15%] mt-[-1%]" />
        {projects}
      </div>
    </section>
  );
}

export default Work;
