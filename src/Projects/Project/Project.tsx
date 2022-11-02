import React from "react";
import style from "./Project.module.css"

export const Project = () => {
    return (
        <div>
            <div className={style.project}>

                <div className={style.projectImageContainer}>
                    {/*<img src={"https://pic.rutubelist.ru/video/7b/f7/7bf7b1a704c04bee291601df48c4603a.jpg?size=w306"}*/}
                    {/*     alt={'project img'}/>*/}
                    <a href={"#"} className={style.projectMore}>see
                        more</a>
                </div>
                <h4 className={style.projectName}>Project name</h4>
                <h4 className={style.projectDescription}>Project description</h4>
            </div>
        </div>
    );
};

