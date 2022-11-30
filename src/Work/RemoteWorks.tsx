import React from "react";
import style from "./RemoteWorks.module.scss"
import styleContainer from "../Common/Styles/Container.module.css"

export const RemoteWorks = () => {
    return (
        <div className={style.workBlock}>
            <div className={`${styleContainer.container} ${style.workContainer}`}>
                <div className={style.work}>
                    <h2>Open and ready for cooperation!</h2>
                    <a className={style.link} href="#">Hire me!</a>
                </div>
            </div>
        </div>
    );
};

