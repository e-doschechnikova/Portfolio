import React from "react";
import style from "./Projects.module.scss";
import { Project } from "./Project/Project";
import { Title } from "../Components/title/Title";
import socialImage from "../Assets/Img/socialnetwork.jpg";
import todoImage from "../Assets/Img/todo.jpg";
import cardsImage from "../Assets/Img/cards.jpg";
import counterImage from "../Assets/Img/counter.jpg";
import royaltyImage from "../Assets/Img/royalty.jpg";
import projectImage from "../Assets/Img/50project.jpg";
import componentsImage from "../Assets/Img/components.jpg";
import tableImage from "../Assets/Img/table.jpg";
import minesweeperImage from "../Assets/Img/minesweeper.jpg";
import calculatorImage from "../Assets/Img/calculator.jpg";

export const Projects = () => {
  const social = {
    backgroundImage: `url(${socialImage})`,
  };
  const todolist = {
    backgroundImage: `url(${todoImage})`,
  };
  const cards = {
    backgroundImage: `url(${cardsImage})`,
  };
  const counter = {
    backgroundImage: `url(${counterImage})`,
  };
  const royalty = {
    backgroundImage: `url(${royaltyImage})`,
  };
  const projects = {
    backgroundImage: `url(${projectImage})`,
  };
  const components = {
    backgroundImage: `url(${componentsImage})`,
  };
  const table = {
    backgroundImage: `url(${tableImage})`,
  };
  const minesweeper = {
    backgroundImage: `url(${minesweeperImage})`,
  };
  const calculator = {
    backgroundImage: `url(${calculatorImage})`,
  };

  return (
    <div id={"projects"} className={style.projectsBlock}>
      <div className={style.projectsContainer}>
        <Title title={"My project"} />
        <div className={style.projects}>
          <Project
            link={"https://github.com/e-doschechnikova/Sweeper-Game"}
            title={"MINESWEEPER GAME"}
            description={"TS/React/SCSS"}
            styles={minesweeper}
          />
          <Project
            link={"https://github.com/e-doschechnikova/Todo-List-TS"}
            title={"TODO LIST"}
            description={"TS/Redux/RestAPI/Thunk/Material UI/Unit Tests"}
            styles={todolist}
          />
          <Project
            link={"https://github.com/e-doschechnikova/Calculator-app"}
            title={"iPhone CALCULATOR"}
            description={"TS/React/SCSS"}
            styles={calculator}
          />
          <Project
            link={"https://github.com/JuliOgogo/friday-project"}
            title={"LEARN CARDS"}
            description={"It was a command work. App for learning some cards"}
            styles={cards}
          />
          <Project
            link={"https://github.com/e-doschechnikova/Product-Table"}
            title={"PRODUCT TABLE"}
            description={"React/Redux/TS/ANT DESIGN"}
            styles={table}
          />
          <Project
            link={"https://github.com/e-doschechnikova/React-Social-Network-TS"}
            title={"SOCIAL NETWORK"}
            description={"TS/Redux/RestAPI/Thunk/Material UI/Unit Tests"}
            styles={social}
          />
          <Project
            link={"https://github.com/e-doschechnikova/Test-counter"}
            title={"COUNTER"}
            description={"React/Redux/TS"}
            styles={counter}
          />
          <Project
            link={"https://github.com/e-doschechnikova/50LittleProjects"}
            title={"50 LITTLE PROJECT"}
            description={"HTML/CSS/JS"}
            styles={projects}
          />
          <Project
            link={"https://github.com/e-doschechnikova/Royalty"}
            title={"ROYALTY"}
            description={"HTML/CSS/JS"}
            styles={royalty}
          />
          <Project
            link={"https://github.com/e-doschechnikova/Homework-Ignat"}
            title={"COMPONENTS"}
            description={"React/TS/CSS"}
            styles={components}
          />
        </div>
      </div>
    </div>
  );
};
