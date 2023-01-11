import React from "react";
import style from "./Projects.module.scss"
import {Project} from "./Project/Project";
import {Title} from "../Components/title/Title";
import socialImage from "../Assets/image/socialnetwork.avif"
import todoImage from "../Assets/image/todolist.avif"
import {Fade} from "react-awesome-reveal";

export const Projects = () => {
    const social = {
        backgroundImage: `url(${socialImage})`
    }
    const todolist = {
        backgroundImage: `url(${todoImage})`
    }
    return (
        <div id={"projects"} className={style.projectsBlock}>
            <div className={style.projectsContainer}>

                <Title title={"My project"}/>
                <Fade delay={1e1} cascade triggerOnce={true} direction={"up"}>
                    <div className={style.projects}>
                        <Project title={"SOCIAL NETWORK"} description={"PROJECT DESCRIPTION"} styles={social}/>
                        <Project title={"TODO LIST"} description={"PROJECT DESCRIPTION"} styles={todolist}/>
                        <Project title={"LEARN CARDS"} description={"PROJECT DESCRIPTION"} styles={social}/>
                        <Project title={"ROYALTY"} description={"..."} styles={social}/>
                        <Project title={"FUTURE PROJECT"} description={"...in progress"} styles={todolist}/>
                        <Project title={"FUTURE PROJECT"} description={"...in progress"} styles={social}/>
                    </div>
                </Fade>
            </div>
        </div>
    );
};
