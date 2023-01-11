import React, {useState} from 'react';
import style from "./BurgerNav.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";

export const BurgerNav = () => {
    const [menuActive, setMenuActive] = useState(false)
    const onButtonClick = () => {
        setMenuActive(!menuActive)
        console.log(menuActive)
    }

    return (
        <div className={style.burgerNav}>
            <div className={menuActive ? `${style.burgerNavItems} ${style.show}` : style.burgerNavItems}>
                <a href="#main">Home</a>
                <a href="#skills">Skills</a>
                <a href='#projects'>Projects</a>
                <a href="#contacts">Contacts</a>
            </div>
            <div onClick={onButtonClick} className={style.burgerButton}><FontAwesomeIcon icon={faBars} style={{width:"25px",  height: "25px", color: "#fff"}}/></div>
        </div>
    );
};

