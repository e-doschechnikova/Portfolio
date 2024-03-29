import React from "react";
import style from "./Main.module.scss";
import mainPhoto from "../Assets/Img/mainPhoto.jpg";
import { Fade } from "react-awesome-reveal";
//@ts-ignore
import CV from "../Assets/Docs/CV.pdf";

export const Main = () => {
  return (
    <div id={"main"} className={style.mainBlock}>
      <div className={style.container}>
        <Fade delay={1e3} cascade triggerOnce={true}>
          <div className={style.greeting}>
            <p className={style.subheadingTitle}>About me</p>
            <h1>Evgeniia Doschechnikova</h1>
            <h5>HELLO, I AM FRONT-END DEVELOPER BASED IN ST. PETERSBURG</h5>
            <a href={CV} download>
              Download CV
            </a>
          </div>
          <div className={style.photo}>
            <img src={mainPhoto} alt={"it`s me"} />
          </div>
        </Fade>
      </div>
    </div>
  );
};
