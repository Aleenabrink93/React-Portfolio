//Reference the Project.js to pull each JS file.

import React from "react";
import Project from "../project/project";
import workDayScheduler from "../../assets/projects/WorkDayScheduler.png";
import gigs from "../../assets/projects/gigs.jpeg";
import weatherDashboard from "../../assets/projects/weatherdashboard.png";
import codeQuiz from "../../assets/projects/CodeQuiz.png";
import noteTaker from "../../assets/projects/noteTaker.png";
import songScope from "../../assets/projects/songScope.png";
import GiftLab from "../../assets/projects/GiftLab.png";

const projects = [
  {
    id: 0,
    title: "Work Day Scheduler",
    languages: "html, css, javascript",
    image: workDayScheduler,
    description: "Allows you to save events ",
    repo: "https://github.com/Aleenabrink93/WorkDayScheduler",
    live: "https://aleenabrink93.github.io/WorkDayScheduler/",
  },
  {
    id: 1,
    title: "Weather Dashboard",
    languages: "html, css, javascript",
    image: weatherDashboard,
    description:
      "Allows you to search for the weather of any city in the world",
    repo: "https://github.com/Aleenabrink93/WeatherDashboard",
    live: "https://aleenabrink93.github.io/WeatherDashboard/",
  },
  {
    id: 2,
    title: "Code Quiz Challenge",
    languages: "html, css, javascript",
    image: codeQuiz,
    description: "Code related quiz with timer and high score storage",
    repo: "https://github.com/Aleenabrink93/CodeQuizChallenge",
    live: "https://aleenabrink93.github.io/CodeQuizChallenge/",
  },
  {
    id: 3,
    title: "Note Taker",
    languages: "html, css, javascript, node.js, express.js",
    image: noteTaker,
    description: "Allows you to take notes and delete them",
    repo: "https://github.com/Aleenabrink93/Note-Taker",
    live: "https://alluring-big-bend-67945-7f0c6bfcfd54.herokuapp.com/notes",
  },
  {
    id: 4,
    title: "GIGS Event Finder",
    languages: "html, css, javascript",
    image: gigs,
    description: "Allows you to search for events from any cities in USA",
    repo: "https://github.com/anna071387/GIGS",
    live: "https://anna071387.github.io/GIGS/index.html",
  },
  {
    id: 5,
    title: "SongScope",
    languages:
      "html, css, javascript, express.js, sequelize, handlebars, passport ",
    image: songScope,
    description: "Allows you to share reviews on your favourite songs",
    repo: "https://github.com/CHawsCoding/Song-Scope",
    live: "https://mysterious-savannah-74622-17da87c641f8.herokuapp.com/",
  },
  {
    id: 6,
    title: "GiftLab",
    languages: "MERN STACK",
    image: GiftLab,
    description: "Online gift shpping website",
    repo: "https://github.com/Lishakuinkel/Giftlab",
    live: "https://giftlab-123-610fac927377.herokuapp.com/",
  },
];

function Portfolio() {
  return (
    <div>
      <h1 className="center">Portfolio</h1>
      <Project projects={projects} />
    </div>
  );
}

export default Portfolio;
