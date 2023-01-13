import React from "react";
import style from "./ContactInfo.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export const ContactInfo: React.FC<ContactInfoPropsType> = ({
  iconTitle,
  contactTitle,
  data,
  link,
}) => {
  return (
    <div className={style.infoContainer}>
      <div className={style.icon}>
        <FontAwesomeIcon icon={iconTitle} />
      </div>
      <div className={style.description}>
        <h4>{contactTitle}</h4>
        <a href={link}>{data}</a>
      </div>
    </div>
  );
};

type ContactInfoPropsType = {
  iconTitle: IconProp;
  contactTitle: string;
  data: string;
  link: string;
};