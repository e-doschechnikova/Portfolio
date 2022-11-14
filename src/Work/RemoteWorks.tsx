import React from "react";
import style from "./RemoteWorks.module.css"
import styleContainer from "../Common/Styles/Container.module.css"
import {Title} from "../Components/Title/Title";

export const RemoteWorks = () => {
    return (
        <div className={style.workBlock}>
            <div className={`${styleContainer.container} ${style.workContainer}`}>
                <div className={style.work}>
                    <h2>Open and ready for cooperation!</h2>
                    {/*<Title title={""}/>*/}
                    <a className={style.link} href="#">Hire me!</a>
                </div>
            </div>
        </div>
    );
};

