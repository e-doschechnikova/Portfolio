import React from "react";
import style from "./Footer.module.scss";
import github from "../Assets/image/github.png"
import linkedin from "../Assets/image/linkedin.png"
import telegram from "../Assets/image/telegram.png"

export const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={style.footerContainer}>
                <div>
                    <div className={style.footerSocial}>
                        <span>© 2022 All rights reserved</span>
                        <a href={"https://github.com/e-doschechnikova"}>
                            <img src={github} alt={"github"}/>
                        </a>
                        <a href={"https://www.linkedin.com/in/e-doschechnikova"}>
                            <img src={linkedin} alt={"linkedin"}/>
                        </a>
                        <a href={"https://www.linkedin.com/in/e-doschechnikova"}>
                            <img src={telegram} alt={"telegram"}/>
                        </a>
                    </div>
                    {/*<div className={style.bottomText}>*/}
                    {/*    <span>© 2022 All rights reserved</span>*/}
                    {/*</div>*/}
                </div>
            </div>

        </div>
    );
};

