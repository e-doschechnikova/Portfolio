import React from "react";
import style from "./Project.module.css"

export const Project = () => {
    return (
        <div>
            <div className={style.project}>
                <img className={style.projectImage} src={"https://www.etudesite.ru/upload/iblock/58b/vuXO35bXcF.jpeg"} alt={'project img'}/>
                <h4 className={style.projectName}>Project name</h4>
                <p className={style.projectDescription}>Project description</p>
            </div>
        </div>
    );
};

