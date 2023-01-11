import React from 'react';
import style from "./Nav.module.scss"
import { Link, animateScroll as scroll } from "react-scroll"
// import Scrollspy from 'react-scrollspy';

export const Nav = () => {
    return (
        <div className={style.nav}>
            {/*<Scrollspy></Scrollspy>*/}
            <a href="#main">Home</a>
            <a href="#skills">Skills</a>
            <a href='#projects'>Projects</a>
            {/*<Link activeClass={style.active}*/}
            {/*      to="projects"*/}
            {/*      spy={true}*/}
            {/*      smooth={true}*/}
            {/*      hashSpy={true}*/}
            {/*      offset={-70}*/}
            {/*      duration={500}*/}
            {/*>*/}
            {/*    Projects*/}
            {/*</Link>*/}
            <a href="#contacts">Contacts</a>
        </div>
    );
}


