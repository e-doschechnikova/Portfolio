import React from "react";
import style from "./Main.module.scss"
import styleContainer from "../Common/Styles/Container.module.css"
import mainPhoto from "../Assets/Image/mainPhoto.jpg"


export const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <section className={style.about}>
                    <div className={style.container}>
                        <div className={style.row}>
                            <div className={style.text}>
                                <h6 className={style.subheadingTitle}>About me</h6>
                                <h2 className={style.headingTitle}>Evgeniia Doschechnikova</h2>
                                <p>Hello, My name is Frances Gorman. I am a creative director and designer based in
                                    California, USA. I love minimalism and I create stunning websites. Feel free to
                                    contact me for any projects you might have in mind. Creative suscipit ante a
                                    hendre. </p>
                                <div className={style.aboutInfo}>
                                    <div className={style.row}>
                                        <div className={style.info}>
                                            <p><b>Birthday: 15 April 1990</b></p>
                                            <p><b>Website: www.fgorman.com</b></p>
                                            <p><b>Phone + 99999999</b></p>
                                            <p><b>Study: Univercity of Harvard</b></p>
                                        </div>
                                        <div className={style.info}>
                                            <p><b>Degree: Master</b></p>
                                            <p><b>Mail: info@fgorman.com</b></p>
                                            <p><b>Linkedin: @francesgorman</b></p>
                                            <p><b>Freelance: Available</b></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={style.aboutImg}>
                                <div className={style.img}>
                                    <img src={mainPhoto} alt={"img"}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

