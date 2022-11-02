import React from "react";
import style from "./Footer.module.css";
import github from "../img/github.png"
import linkedin from "../img/linkedin.png"
import telegram from "../img/telegram.png"
import styleContainer from "../Common/Styles/Container.module.css";

export const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <div>
                    <p>
                        <span>Evgeniia Doschechnikova</span>
                    </p>
                    <div className={style.footerSocial}>
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
                    <div className={style.bottomText}>
                        <span>© 2022 All rights reserved</span>
                    </div>
                </div>
            </div>

        </div>
    );
};

