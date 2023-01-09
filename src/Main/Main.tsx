import React from "react";
import style from "./Main.module.scss"
import styleContainer from "../Common/Styles/Container.module.css"
import mainPhoto from "../Assets/Image/mainPhoto.jpg"


export const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.container}>
                    <div className={style.aboutMe}>
                        <h6 className={style.subheadingTitle}>About me</h6>
                        <h2 className={style.headingTitle}>Evgeniia Doschechnikova</h2>
                        <p>HELLO, I AM FRONT-END DEVELOPER BASED IN
                            ST. PETERSBURG</p>
                    </div>
                    <div className={style.photo}>
                        <img src={mainPhoto} alt={"img"}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

