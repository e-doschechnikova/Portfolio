import React from 'react';
import style from "./Footer.module.css";
import {Title} from "../Components/Title/Title";

export const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={style.footerContainer}>
                <Title title={"Evgeniia Doschechnikova"}/>
                <div className={style.footerSocial}>
                </div>
            </div>
        </div>
    );
};

