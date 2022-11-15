import React from "react";
import style from "./Skills.module.css"
import styleContainer from "../Common/Styles/Container.module.css"
import {Skill} from "./Skill/Skill";
import {Title} from "../Components/Title/Title";

export const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title title={"Skills"}/>
                <div className={style.skills}>
                    <Skill title={"CSS"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit."}/>
                    <Skill title={"JS/TS"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit."}/>
                    <Skill title={"React"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit."}/>
                </div>
            </div>
        </div>
    );
};

