import { projects } from './workData';

function Work() {
  return (
    <section id="work" className="pt-[90px] h-[100vh] back_round_color_home">
      <div>
        {projects}
      </div>
    </section>
  );
}

export default Work;
