import React from "react";
import style from "./Footer.module.scss";
import github from "../Assets/image/github.png"
import linkedin from "../Assets/image/linkedin.png"
import telegram from "../Assets/image/telegram.png"

export const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={style.footerContainer}>
                <div className={style.footerSocial}>
                    <a href={"https://github.com/e-doschechnikova"}>
                        <p>github</p>
                        {/*<img src={github} alt={"github"}/>*/}
                    </a>
                    <a href={"https://www.linkedin.com/in/e-doschechnikova"}>
                        <p>linkedin</p>
                        {/*<img src={linkedin} alt={"linkedin"}/>*/}
                    </a>
                    <a href={"https://www.linkedin.com/in/e-doschechnikova"}>
                        <p>telegram</p>
                        {/*<img src={telegram} alt={"telegram"}/>*/}
                    </a>
                </div>
            </div>
        </div>
    );
};

