import React, {FC} from "react";
import style from "./Project.module.css"


type ProjectType = {
    // styles: { backgroundImage: string }
    // code: string
    // demo: string
    title: string
    description: string
}
export const Project: FC<ProjectType> = ({title, description}) => {
    return (
        <div>
            <div className={style.project}>
                <div className={style.projectImageContainer}>
                    <a href={"#"} className={style.projectMore}>see
                        more</a>
                </div>
                <h3 className={style.projectTitle}>{title}</h3>
                <div className={style.line}></div>
                <span className={style.projectDescription}>{description}</span>
            </div>
        </div>
    );
};

