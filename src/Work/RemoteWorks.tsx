import React from "react";
import style from "./RemoteWorks.module.scss"

export const RemoteWorks = () => {
    return (
        <div className={style.workBlock}>
            <div className={style.workContainer}>
                <div className={style.work}>
                    <h2>Open and ready for cooperation!</h2>
                    <a className={style.link} href="#">Hire me!</a>
                </div>
            </div>
        </div>
    );
};

