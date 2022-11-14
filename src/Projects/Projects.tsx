import React from "react";
import style from "./Projects.module.css"
import styleContainer from "../Common/Styles/Container.module.css"
import {Project} from "./Project/Project";
import {Title} from "../Components/Title/Title";

export const Projects = () => {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <div className={style.title}>
                    <Title title={"My project"}/>
                </div>
                <div className={style.projects}>
                    <Project title={"SOCIAL NETWORK"} description={"PROJECT DESCRIPTION"}/>
                    <Project title={"TODO LIST"} description={"PROJECT DESCRIPTION"}/>
                    <Project title={"PROJECT NAME"} description={"PROJECT DESCRIPTION"}/>
                </div>
            </div>

        </div>
    );
};
