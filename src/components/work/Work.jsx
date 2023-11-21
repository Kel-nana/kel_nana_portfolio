import { projects } from './workData';

function Work() {
  return (
    <section id="work" className="pt-[90px] h-[100vh] back_round_color_home">
      <div className="grid grid-cols-3 gap-2 w-[100vw] h-[90vh] overflow-hidden">
        {projects}
      </div>
    </section>
  );
}

export default Work;
