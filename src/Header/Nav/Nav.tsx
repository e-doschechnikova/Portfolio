import React from 'react';
import style from "./Nav.module.scss"

export const Nav = () => {
    return (
        <div className={style.nav}>
            <a href="#main">Home</a>
            <a href="#skills">Skills</a>
            <a href='#projects'>Projects</a>
            <a href="#contacts">Contacts</a>
        </div>
    );
}


