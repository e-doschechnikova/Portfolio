import React, {FC} from 'react';
import style from "./Skill.module.scss"
import {Line} from "../../Components/Line/Line";

type SkillType = {
    title: string,
    description: string
}

export const Skill: FC<SkillType> = ({title, description}) => {
    return (
        <div className={style.skill}>
            <div className={style.icon}></div>
            <h3 className={style.projectTitle}>{title}</h3>
            <Line/>
            <span className={style.description}>{description}</span>
        </div>
    );
};

