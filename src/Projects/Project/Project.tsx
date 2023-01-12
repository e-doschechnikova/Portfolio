import React, {FC} from "react";
import style from "./Project.module.scss"
import {Line} from "../../Components/line/Line";
import {Fade} from "react-awesome-reveal";

type ProjectType = {
    styles: { backgroundImage: string }
    title: string
    description: string,
    link: string
}
export const Project: FC<ProjectType> = ({styles, title, description, link}) => {
    return (
        <Fade delay={1e1} cascade triggerOnce={true} direction={"up"}>
            <div className={style.project}>
                <div className={style.projectImage} style={styles}>
                    <div className={style.overlay}>
                        <div className={style.description}>
                            <h3>{title}</h3>
                            <p>{description}</p>
                            <a href={link} className={style.projectBtn} target={"_blank"}>see
                                more</a>
                        </div>
                    </div>
                </div>
            </div>
        </Fade>
    );
};

