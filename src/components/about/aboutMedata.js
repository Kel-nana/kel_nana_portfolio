import jestImg from '../../assets/jest.png';
import rubyImg from '../../assets/ruby.png';
import htmlImg from '../../assets/htt.png';
import saasImg from '../../assets/saas.png';
import postgresImg from '../../assets/postgre.png';
import tailwindImg from '../../assets/tailwind.png';
import railsImg from '../../assets/rails.png';
import reactImg from '../../assets/react.png';
import reduxImg from '../../assets/redux.png';
import rspecImg from '../../assets/rspec.png';
import bootStrapImg from '../../assets/bootStrap.jpg';
import gitHubImage from '../../assets/github.png';
import gitImg from '../../assets/git.png';
import vsCodeImg from '../../assets/vscode.png';
import jsImg from '../../assets/jss.png';
import cssImg from '../../assets/css.png';

const aboutMe = {
  name: 'ABOUT ME',
  description: "Hi, I'm Kelvin, a full-stack developer enrolled in Microverse. I love collaborating with coding partners around the GLOBE using project-based learning and pair programming. I specialize in HTML5, CSS3, JavaScript, and React, with plans to add React Native, Ruby, and Ruby on Rails. With excellent communication and time management skills, I'm passionate about improving user interfaces and building consumer-friendly products. Let's discuss my ideas for enhancing your operating system's user interface on a 20-min Zoom call next week",
  tech: '[ TECH_STACK ]',
  view: '[ VIEW_MORE ]',
};

const backEnd = [
  {
    name: 'Ruby',
    Image: rubyImg,
  },
  {
    name: 'Rails',
    Image: railsImg,
  },
  {
    name: 'Postgres',
    Image: postgresImg,
  },
];

const frontEnd = [
  {
    name: 'HTML',
    Image: htmlImg,
  },
  {
    name: 'CSS',
    Image: cssImg,
  },
  {
    name: 'JavaScript',
    Image: jsImg,
  },
  {
    name: 'React',
    Image: reactImg,
  },
  {
    name: 'Redux',
    Image: reduxImg,
  },
  {
    name: 'Saas',
    Image: saasImg,
  },
  {
    name: 'Bootstrap',
    Image: bootStrapImg,
  },
  {
    name: 'Tailwind',
    Image: tailwindImg,
  },
];

const toolsAndMethods = [
  {
    name: 'Jest',
    Image: jestImg,
  },
  {
    name: 'Rspec',
    Image: rspecImg,
  },
  {
    name: 'GitHub',
    Image: gitHubImage,
  },
  {
    name: 'Git',
    Image: gitImg,
  },
  {
    name: 'VS Code',
    Image: vsCodeImg,
  },
];

const frontEndDisplay = frontEnd.map((item) => (
  <div key={item.name} className="grid grid-cols-3 gap-2 content-centerw-[27vw] mb-[5px] rounded-tr-3xl border_color_top_img ">
    <p>{item.name}</p>
    <img
      key={item.name}
      src={item.Image}
      alt="image_portfolio"
      className="z-20 relative ml-[97.6%] h-[40px] w-[40px] rounded-full border-2 border_color_icon border_color_left p-[3.5px]"
    />

  </div>
));

const backEndDisplay = backEnd.map((item) => (
  <div key={item.name} className="grid grid-cols-3 gap-2 w-[27vw] mb-[5px] rounded-tr-3xl border_color_top_img rounded-tr-3xl border_color_top_img">
    <p>{item.name}</p>
    <img
      key={item.name}
      src={item.Image}
      alt="image_portfolio"
      className="z-20 relative ml-[97.6%] h-[40px] w-[40px] rounded-full border-2 border_color_icon border_color_left p-[3.5px]"
    />

  </div>
));

const toolsAndMethodsDisplay = toolsAndMethods.map((item) => (
  <div key={item.name} className="grid grid-cols-3 gap-2 w-[27vw] mb-[5px]  rounded-tr-3xl border_color_top_img">
    <p>{item.name}</p>
    <img
      key={item.name}
      src={item.Image}
      alt="image_portfolio"
      className="z-20 relative ml-[97.6%] h-[40px] w-[40px]  rounded-full border-2 border_color_icon border_color_left p-[3.5px]"
    />

  </div>
));

const iconBtn = frontEnd.map((item) => {
  if (['HTML', 'CSS', 'JavaScript'].includes(item.name)) {
    return (
      <div key={item.name} className="grid grid-cols-3 gap-2 w-[14vw] mb-[5px] ml-[10%]  ">
        <img
          key={item.name}
          src={item.Image}
          alt="image_portfolio"
          className="z-20 relative ml-[0.6%] h-[5vh] w-[5vw] rounded-full border-2 border_color_icon  p-[3.5px]"
        />
        <p className="responsive_text_titles">{item.name}</p>
      </div>
    );
  }
  return null; // If the item name is 'React', stop displaying further items
});

export {
  aboutMe, backEndDisplay, frontEndDisplay, toolsAndMethodsDisplay, iconBtn,
};
