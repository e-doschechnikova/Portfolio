import React, { useState } from "react";
import style from "./BurgerNav.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export const BurgerNav = () => {
  const [menuActive, setMenuActive] = useState(false);
  const onButtonClick = () => {
    setMenuActive(!menuActive);
  };

  type BurgerLinks = Array<{ href: string; title: string }>;
  const burgerLinks: BurgerLinks = [
    { href: "#main", title: "Home" },
    { href: "#skills", title: "Skills" },
    {
      href: "#projects",
      title: "Projects",
    },
    { href: "#contacts", title: "Contacts" },
  ];

  return (
    <div className={style.burgerNav}>
      <div
        className={
          menuActive
            ? `${style.burgerNavItems} ${style.show}`
            : style.burgerNavItems
        }
      >
        {burgerLinks.map(({ href, title }) => {
          return (
            <a href={href} onClick={onButtonClick} key={title}>
              {title}
            </a>
          );
        })}
      </div>
      <div onClick={onButtonClick} className={style.burgerButton}>
        <FontAwesomeIcon
          icon={faBars}
          style={{
            width: "25px",
            height: "25px",
            color: "#fff",
          }}
        />
      </div>
    </div>
  );
};
