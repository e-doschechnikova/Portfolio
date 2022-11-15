import React from "react";
import style from "./Skills.module.scss"
import styleContainer from "../Common/Styles/Container.module.css"
import {Skill} from "./Skill/Skill";
import {Title} from "../Components/Title/Title";

export const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title title={"Skills"}/>
                <div className={style.skills}>
                    <Skill title={"Programming languages"} description={"JavaScript, TypeScript"}/>
                    <Skill title={"DEVELOPMENT"} description={"React, Redux, SCSS & CSS, Git"}/>
                    <Skill title={"TESTING"} description={"Unit Tests, SnapShot, Storybook"}/>
                    <Skill title={"DESIGN"} description={"Material UI, Adobe, Photoshop,"}/>
                    <Skill title={"SOCIAL"}
                           description={"Well-coordinated teamwork, with a sense of humor, small talk, easy and quick to learn"}/>
                </div>
            </div>
        </div>
    );
};

