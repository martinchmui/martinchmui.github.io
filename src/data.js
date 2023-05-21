import maokaimatchups from './assets/maokaimatchups.netlify.app_.png';
import JukeBx1 from './assets/JukeBx1.png';
import JukeBx2 from './assets/JukeBx2.png';
import JukeBx3 from './assets/JukeBx3.png';
import twitchviewerss from './assets/twitchviewerss.png';
import tftrandomizerss from './assets/tftrandomizerss.png';
import contributioncalcss from './assets/contributioncalcss.png';
import recipeappss from './assets/recipeappss.png';

export const projects = [
  {
    title: 'Maokai Matchups',
    description:
      'This app is a matchups site for League of Legends. The data is sourced from a google spreadsheet and the assets from an external API. This project was built to familiarize how Typescript works with the React library.',
    images: [maokaimatchups],
    demoUrl: 'https://maokaimatchups.netlify.app/',
    skills: ['html', 'css', 'typescript', 'react', 'redux'],
    sourceUrl: 'https://github.com/martinchmui/maokai-matchups',
  },
  {
    title: 'JukeBx',
    description:
      'A music player app with YouTube search function. This project was built to practice my skills in mobile development using React Native and creating a backend service for a frontend project.',
    images: [JukeBx1, JukeBx2, JukeBx3],
    demoUrl:
      'https://appetize.io/app/z2xcz2dlbkahqjpngeh7fg7woi?device=pixel4&osVersion=11.0&scale=75&audio=true',
    skills: ['html', 'css', 'javascript', 'react', 'redux', 'express'],
    sourceUrl: 'https://github.com/martinchmui/JukeBx',
    downloadUrl:
      'https://drive.google.com/uc?export=download&id=1kD7mo2e5TExv3gADn7Ob0DNMi4GSuw3B',
  },
  {
    title: 'Twitch Viewer',
    description:
      'This app is a third-party site that lets users watch as many Twitch broadcasts they want. It includes an auto-join chat feature, and a carousel component to organize multiple broadcasts. This project was practice for integrating OAuth Authorization Code flow and how to handle dynamic API.',
    images: [twitchviewerss],
    demoUrl: 'https://twitch-viewer.netlify.app/',
    skills: ['html', 'css', 'javascript', 'react', 'redux'],
    sourceUrl: 'https://github.com/martinchmui/twitch-viewer',
  },
  {
    title: 'TFT Randomizer',
    description:
      'An app that allows the user to randomly choose their cosmetic skins in Teamfight Tactics, a feature not available in the League of Legends Client. The main purpose of this project was to help me familiarize how to manipulate JSON data and display it in the DOM.',
    images: [tftrandomizerss],
    demoUrl: 'https://martinchmui.github.io/tft-randomizer/',
    skills: ['html', 'css', 'javascript', 'react', 'redux'],
    sourceUrl: 'https://github.com/martinchmui/tft-randomizer',
  },
  {
    title: 'Contribution Calculator',
    description:
      "A calculator for determining how much of an asset a user should buy based on their target asset allocations. Project's purpose was to learn how form submissions work in a React App.",
    images: [contributioncalcss],
    demoUrl: 'https://martinchmui.github.io/contribution-calculator/',
    skills: ['html', 'javascript', 'react', 'redux'],
    sourceUrl: 'https://github.com/martinchmui/contribution-calculator',
  },
  {
    title: 'Recipe App',
    description:
      'This app allows a user to store their favourite recipes and whether if they have the ingredients needed. This project was made entirely from JavaScript and provides practice into CRUD operations.',
    images: [recipeappss],
    demoUrl: 'https://mui-recipeapp.netlify.app/',
    skills: ['html', 'javascript'],
    sourceUrl: 'https://github.com/martinchmui/recipe-app',
  },
];
