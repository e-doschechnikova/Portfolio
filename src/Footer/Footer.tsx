import React from "react";
import style from "./Footer.module.scss";

export const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={style.footerContainer}>
                <div className={style.footerSocial}>
                    <a href={"https://github.com/e-doschechnikova"}>
                        <p className={style.footerText}>github</p>
                    </a>
                    <a href={"https://www.linkedin.com/in/e-doschechnikova"}>
                        <p className={style.footerText}>linkedin</p>
                    </a>
                    <a href={"https://www.linkedin.com/in/e-doschechnikova"}>
                        <p className={style.footerText}>telegram</p>
                    </a>
                </div>
            </div>
        </div>
    );
};

