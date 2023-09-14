//Reference the Project.js to pull each JS file.

import React from "react";
import Project from "../project/project";
// import WorkDayScheduler from "../../assets/projects/WorkDayScheduler.png"

const projects = [
  {
    id: 0,
    title: "Work Day Scheduler",
    languages: "html, css, javascript",
    image:"../../assets/projects/WorkDayScheduler.png",
    description: "Allows you to save events ",
    repo: "https://github.com/Aleenabrink93/WorkDayScheduler",
    live: "https://aleenabrink93.github.io/WorkDayScheduler/",
  },
  {
    id: 1,
    title: "Weather Dashboard",
    languages: "html, css, javascript",
    image: "",
    description: "Allows you to search for the weather of any city in the world",
    repo: "https://github.com/Aleenabrink93/WeatherDashboard",
    live: "https://aleenabrink93.github.io/WeatherDashboard/",
  },
  {
    id: 2,
    title: "Code Quiz Challenge",
    languages: "html, css, javascript",
    image: "",
    description: "Code related quiz with timer and high score storage",
    repo: "https://github.com/Aleenabrink93/CodeQuizChallenge",
    live: "https://aleenabrink93.github.io/CodeQuizChallenge/",
  },
  {
    id: 3,
    title: "Note Taker",
    languages: "html, css, javascript, node.js, express.js",
    image: "",
    description: "Allows you to take notes and delete them",
    repo: "https://github.com/Aleenabrink93/Note-Taker",
    live: "https://alluring-big-bend-67945-7f0c6bfcfd54.herokuapp.com/notes",
  },
  {
    id: 4,
    title: "GIGS Event Finder",
    languages: "html, css, javascript",
    image: "",
    description: "Allows you to search for events from any cities in USA",
    repo: "https://github.com/anna071387/GIGS",
    live: "https://anna071387.github.io/GIGS/index.html",
  },
  {
    id: 5,
    title: "SongScope",
    languages: "html, css, javascript, express.js, sequelize, handlebars, passport ",
    image: "",
    description: "Allows you to share reviews on your favourite songs",
    repo: "https://github.com/CHawsCoding/Song-Scope",
    live: "https://mysterious-savannah-74622-17da87c641f8.herokuapp.com/",
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