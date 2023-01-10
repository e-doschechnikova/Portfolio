import React from "react";
import style from "./RemoteWorks.module.scss"
import {Title} from "../Components/title/Title";

export const RemoteWorks = () => {
    return (
        <div className={style.workBlock}>
            <div className={style.workContainer}>
                <div className={style.work}>
                    <Title title={'Open and ready for cooperation!'}/>
                    <a className={style.link} href="#">Hire me!</a>
                </div>
            </div>
        </div>
    );
};

