import React, {FC} from 'react';
import style from "./Skill.module.css"

type SkillType = {
    title: string,
    description: string
}

export const Skill: FC<SkillType> = ({title,description}) => {
    return (
        <div className={style.skill}>
            <div className={style.icon}></div>
            <h3>{title}</h3>
            <span className={style.description}>{description}</span>
        </div>
    );
};

