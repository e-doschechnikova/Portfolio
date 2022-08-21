import React from "react";
import style from "./Work.module.css"
import styleContainer from "../Common/Styles/Container.module.css"

export const Work = () => {
    return (
        <div className={`${styleContainer.container} ${style.workContainer}`}>
<div className={style.work}>Considering remote work options!</div>
        </div>
    );
};

