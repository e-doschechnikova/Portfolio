import React from "react";
import style from "./Projects.module.scss"
import styleContainer from "../Common/Styles/Container.module.css"
import {Project} from "./Project/Project";
import {Title} from "../Components/Title/Title";
import socialImage from ".././Assets/Image/socialnetwork.avif"
import todoImage from ".././Assets/Image/todolist.avif"

export const Projects = () => {
    const social = {
        backgroundImage: `url(${socialImage})`
    }
    const todolist = {
        backgroundImage: `url(${todoImage})`
    }
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
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
