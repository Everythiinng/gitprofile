// gitprofile.config.js

const config = {
  github: {
    username: 'Everythiinng', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: ['reactjs-food-order-app', 'gitprofile'], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'arbnor-rexhepi-a3a11220b',
    twitter: 'Arbnor628129351',
    facebook: '',
    instagram: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // format: userid/username
    website: 'https://everythiinng.github.io',
    phone: '+38970997717',
    email: 'r.arbnor@outlook.com',
  },
  resume: {
    fileUrl: '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: ['SASS', 'JavaScript', 'React.js', 'MySQL', 'Git', 'CSS', 'HTML'],
  experiences: [
    {
      company: 'Communal Hygiene',
      position: 'IT Strategist',
      from: 'September 2020',
      to: 'May 2022',
      companyLink: 'https://khigiena.com.mk/',
    },
  ],
  education: [
    {
      institution: 'Udemy',
      degree: 'ReactJS',
      from: 'November 2022',
      to: 'Present',
    },
    {
      institution: 'Udemy',
      degree: 'JavaScript',
      from: 'July 2022',
      to: 'November 2022',
    },
    {
      institution: 'Udemy',
      degree: 'CSS/SASS Advanced',
      from: 'September 2022',
      to: 'October 2022',
    },
    {
      institution: 'Mimo',
      degree: 'Web Developer',
      from: 'January 2022',
      to: 'October 2022',
    },
    {
      institution: 'Mimo',
      degree: 'SQL',
      from: 'January 2022',
      to: 'October 2022',
    },
    {
      institution: 'Udemy',
      degree: 'C# MasterClass',
      from: 'March 2020',
      to: 'September 2020',
    },
    {
      institution: 'CodeAcademy',
      degree: 'Full-Stack Web Developer',
      from: '2019',
      to: '2020',
    },
    {
      institution: 'Mother Theresa',
      degree: 'Bachelor at Computer Science',
      from: '2018',
      to: 'Present',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: '', // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'luxury',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },
};

export default config;
