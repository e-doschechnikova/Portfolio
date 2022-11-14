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
                <div className={style.descriptionBlock}>
                    <h4 className={style.projectTitle}>{title}</h4>
                    <h4 className={style.projectDescription}>{description}</h4>
                </div>
            </div>
        </div>
    );
};

