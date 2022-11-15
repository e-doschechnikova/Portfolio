import React, {FC} from "react";
import style from "./Project.module.scss"
import {Line} from "../../Components/Line/Line";


type ProjectType = {
    styles: { backgroundImage: string }
    title: string
    description: string
}
export const Project: FC<ProjectType> = ({styles, title, description}) => {
    return (
        <div className={style.project}>
            <div className={style.projectImage} style={styles}>
                <a href={"#"} className={style.projectBtn}>see
                    more</a>
            </div>
            <div className={style.projectInfo}>
                <h3 className={style.projectTitle}>{title}</h3>
                <Line/>
                <span className={style.projectDescription}>{description}</span>
            </div>
        </div>
    );
};

