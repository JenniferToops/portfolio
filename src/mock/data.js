import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Jennifer Toops', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Jennifer Toops Software Engineer Portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Jennifer Toops',
  subtitle: "I'm a software engineer & full-stack web developer.",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'I am a software engineer with a background in real estate and a degree in psychology. I love all aspects of web development and consider myself a lifelong learner! My interests include plant-based, gluten-free cooking, literature, movies, art, Classical piano, organic gardening, taekwondo, interior design, and upcycling used furniture.',
  paragraphTwo:
    'On the surface, my path to web development seems counterintuitive given my liberal arts background and diverse extracurricular interests. I was fully invested in as a real estate agent and gave 100% of my time and energy to my clients. Yet, when Covid-19 hit our housing market, as a single parent I needed to consider a more stable career path.',
  paragraphThree:
    "After a lot of reflection, I found that certain patterns emerged. Although my ex-husband had a PhD in chemical engineering and built complex systems from scratch, I was always the one who purchased and installed our devices, peripherals, and software at home. At most of my jobs, I trained coworkers on company software and, more recently, taught other real estate agents to use our associations's transaction management software. I built websites for fun before I knew what a web developer was. Transitioning to software engineering actually made perfect sense. It just took a pandemic to make me see that I've been on this path my whole life.",
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'GitHub-trackerSS.png',
    title: 'GitHub Accountability Tracker',
    info: 'New developers need to get into the habit of pushing to GitHub on a daily basis. This handy app can be shared on teams, between friends, or even for personal use to help build this necessary habit. The ability to "like" other people\'s pushes can further reinforce the routine.',
    info2:
      'This app was the result of a coordinated team effort by members in four time zones and three different countries (I love working on teams!) All visitors are free to view and "like" posts, but users need to make an account and log in using local authentication to create and delete their own posts.',
    url: 'https://occ-github-tracker.herokuapp.com/',
    repo: 'https://github.com/JenniferToops/github-tracker', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'PickAPokemon.png',
    title: 'Pick a Pokemon!',
    info: 'The colors for this project are so fun! This app pulls Pokemon information from a Pokemon API and spits it out onto the page. To be perfectly honest, the documentation for this API was a beast, and it took forever for me to get the sprites to render. It was worth it in the end, though.',
    info2:
      'If I go back to this project, I will add error messages for Pokemon that are not in the API.',
    url: 'https://pickapokemon.netlify.app',
    repo: 'https://github.com/JenniferToops/pickapokemon', // if no repo, the button will not show up
  },
  // {
  //   id: nanoid(),
  //   img: 'project.jpg',
  //   title: '',
  //   info: '',
  //   info2: '',
  //   url: '',
  //   repo: 'https://github.com/JenniferToops/zipweatherapi', // if no repo, the button will not show up
  // },
  {
    id: nanoid(),
    img: 'CoffeeAPI.png',
    title: 'Coffee Collection API',
    info: 'Users enter information about the coffee of their choice. This data is posted to a collection in MongoDB, then passed through EJS and rendered to the browser.',
    info2:
      'I really love this little app and intend add a delete button so that users can remove their coffee listings. I actually created it for myself since I have so many different kinds of coffee and forget which ones are my favorites!',
    url: 'https://occ-coffee-api.herokuapp.com/',
    repo: 'https://github.com/JenniferToops/coffee-api', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'WeatherAPI.png',
    title: 'Weather API',
    info: 'This API project appears simple, but is more complicated than it looks. I used two APIs: a location API and a Weather API. The user inputs a zip code, which is entered into the location API, which generates a city name. That city name is then entered into the weather API, which generates the temperature for that location.',
    info2:
      'If I come back to it later, I may add some media queries to make it fully responsive, add some margins, and perhaps add some CSS that makes the output more fun to look at.',
    url: 'https://zipweatherapi.netlify.app',
    repo: 'https://github.com/JenniferToops/zipweatherapi', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'dev@jennifertoops.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/jennifertoops',
    },
    {
      id: nanoid(),
      name: 'facebook',
      url: 'https://facebook.com/jenntoops',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://linkedin.com/in/jennifertoops',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/jennifertoops',
    },
    {
      id: nanoid(),
      name: 'twitch',
      url: 'https://twitch.tv/oldcoderchick',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
