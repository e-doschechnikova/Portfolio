import React from "react";
import style from "./Skills.module.scss"
import styleContainer from "../Common/Styles/Container.module.css"
import {Skill} from "./Skill/Skill";
import {Title} from "../Components/Title/Title";
import {faLaptopCode, faPalette, faTasks, faUsers} from "@fortawesome/free-solid-svg-icons";

export const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title title={"Skills"}/>
                <div className={style.skills}>
                    <Skill title={"DEVELOPMENT"} description={"JavaScript, TypeScript, React, Redux, SCSS & CSS, Git"}
                           titleIcon={faLaptopCode}/>
                    <Skill title={"TESTING"} description={"Unit Tests, SnapShot, Storybook"} titleIcon={faTasks}/>
                    <Skill title={"DESIGN"} description={"Material UI, Adobe, Photoshop,"} titleIcon={faPalette}/>
                    <Skill title={"SOCIAL"}
                           description={"Well-coordinated teamwork, with a sense of humor, small talk, easy and quick to learn"}
                           titleIcon={faUsers}/>
                </div>
            </div>
        </div>
    );
};

