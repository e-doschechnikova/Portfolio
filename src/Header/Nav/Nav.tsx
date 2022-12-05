import React from 'react';
import style from "./Nav.module.scss"

export const Nav = () => {
    return (
        <div className={style.nav}>
            <a href="src/Header/Nav/Nav">Home</a>
            <a href="src/Header/Nav/Nav">Skills</a>
            <a href="src/Header/Nav/Nav">Projects</a>
            <a href="src/Header/Nav/Nav">Contacts</a>
        </div>
    );
}


