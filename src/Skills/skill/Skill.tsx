import React, { FC } from "react";
import style from "./Skill.module.scss";
import { Line } from "../../Components/line/Line";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

type SkillType = {
  title: string;
  description: string;
  titleIcon: IconProp;
};

export const Skill: FC<SkillType> = ({ title, description, titleIcon }) => {
  return (
    <div className={style.skill}>
      <div className={style.iconContainer}>
        <FontAwesomeIcon icon={titleIcon} className={style.icon} />
      </div>
      <h3 className={style.projectTitle}>{title}</h3>
      <Line />
      <span className={style.description}>{description}</span>
    </div>
  );
};