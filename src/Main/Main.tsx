import React from "react";
import style from "./Main.module.css"
import styleContainer from "../Common/Styles/Container.module.css"

export const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.text}>
                    <span> Hi There</span>
                    <h1>I am Evgeniia Doschechnikova</h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={style.photo}></div>
            </div>
        </div>
    );
};

