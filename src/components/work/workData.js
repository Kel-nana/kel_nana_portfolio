import budgetApp from '../../assets/budget_App.png';
import airPollutionApp from '../../assets/air_pollution.png';
import purpleCoders from '../../assets/purple_coders.png';

const works = [
  {
    id: 1,
    name: 'Budget-App',
    description: 'Budget-App is a mobile web application that allows users to manage their budget. User can see a list of expenses associated with a group and total amount. It also allows users to introduce new groups/expenses and keep track of money spent.',
    imageSrc: budgetApp,
    technologies: [
      'JavaScript',
      'Ruby on Rails',
      'CSS',
      'HTML',
    ],
    liveVersionLink: 'https://budget-app-wyrf.onrender.com/',
    SourceLink: 'https://github.com/Kel-nana/Budget-app/tree/deployment',
    date: '2023',
    stack: 'Full Stack Dev',
  },
  {
    id: 2,
    name: 'Air Pollution App',
    description: 'A (SPA) web application created with Air Pollution Api, users can check levels of the cities, filter them via dropdown menu and see the details per city on the new page.',
    imageSrc: airPollutionApp,
    technologies: [
      'JavaScript',
      'React/Redux',
      'CSS',
      'HTML',
    ],
    liveVersionLink: 'https://air-pollution-mbhw.onrender.com/',
    SourceLink: 'https://github.com/Kel-nana/Air-pollution-capstone-react',
    date: '2023',
    stack: 'Front End Dev',
  },
  {
    id: 3,
    name: 'Purple Coders Festival',
    description: 'Purple-Coders is a Its a project meant to master my skills in version control, GitHub flow, pull requests in GitHub and JavaScript..',
    imageSrc: purpleCoders,
    technologies: [
      'JavaScript',
      'CSS',
      'HTML',
    ],
    liveVersionLink: 'https://kel-nana.github.io/Purple-Coders---HTML-CSS-JavaScript-capstone-project/',
    SourceLink: 'https://github.com/Kel-nana/Purple-Coders---HTML-CSS-JavaScript-capstone-project/tree/HTML-CSS-JavaScript',
    date: '2023',
    stack: 'Front End Dev',
  },
];
// overflow-hidden
const projects = works.map((work) => (
  <div key={work.id} className="w-[70vw] h-[90vh]">
    <div className=" mb-[5px]">
      <div>
        <p>{work.id}</p>
        <p>{work.name}</p>
        <p>{work.description}</p>
        <img
          key={work.id}
          src={work.imageSrc}
          alt="Projects"
          className="z-20 relative  h-[40px] w-[40px] rounded-full border-2  p-[3.5px]"
        />
        <div className="ml-[5px]">
          {work.technologies.map((tech) => <span className="ml-[10px]" key={work.name}>{tech}</span>) }
        </div>
        <p>{work.liveVersionLink}</p>
        <p>{work.SourceLink}</p>
        <p>{work.date}</p>
        <p>{work.stack}</p>
      </div>
    </div>
  </div>
));

export {
  works, projects,
};
