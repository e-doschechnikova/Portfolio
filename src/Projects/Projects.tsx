import React from "react";
import style from "./Projects.module.scss"
import {Project} from "./Project/Project";
import {Title} from "../Components/title/Title";
import socialImage from "../Assets/image/socialnetwork.avif"
import todoImage from "../Assets/image/todolist.avif"

export const Projects = () => {
    const social = {
        backgroundImage: `url(${socialImage})`
    }
    const todolist = {
        backgroundImage: `url(${todoImage})`
    }
    return (
        <div className={style.projectsBlock}>
            <div className={style.projectsContainer}>
                <Title title={"My project"}/>
                <div className={style.projects}>
                    <Project title={"SOCIAL NETWORK"} description={"PROJECT DESCRIPTION"} styles={social}/>
                    <Project title={"TODO LIST"} description={"PROJECT DESCRIPTION"} styles={todolist}/>
                    <Project title={"PROJECT NAME"} description={"PROJECT DESCRIPTION"} styles={social}/>
                </div>
            </div>
        </div>
    );
};
