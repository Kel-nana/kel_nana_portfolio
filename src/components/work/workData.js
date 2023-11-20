const works = [
  {
    name: 'Budget-App',
    description: 'Budget-App is a mobile web application that allows users to manage their budget. User can see a list of expenses associated with a group and total amount. It also allows users to introduce new groups/expenses and keep track of money spent.',
    imageSrc: '../../assets/budget_App.png',
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
    name: 'Air Pollution App',
    description: 'A (SPA) web application created with Air Pollution Api, users can check levels of the cities, filter them via dropdown menu and see the details per city on the new page.',
    imageSrc: '../../assets/air_pollution.png',
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
    name: 'Purple Coders Festival',
    description: 'Purple-Coders is a Its a project meant to master my skills in version control, GitHub flow, pull requests in GitHub and JavaScript..',
    imageSrc: '../../assets/purple_coders.png',
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

const work = works.map((work) => {
  console.log(work.technologies);
  return work.technologies;
});
console.log(work);

// export default works;
