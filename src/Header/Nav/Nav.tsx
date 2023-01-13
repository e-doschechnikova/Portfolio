import React from "react";
import style from "./Nav.module.scss";

export const Nav = () => {
  type Links = Array<{ href: string; title: string }>;
  const links: Links = [
    { href: "#main", title: "Home" },
    { href: "#skills", title: "Skills" },
    {
      href: "#projects",
      title: "Projects",
    },
    { href: "#contacts", title: "Contacts" },
  ];

  return (
    <div className={style.nav}>
      {links.map(({ href, title }) => {
        return (
          <a href={href} key={title}>
            {title}
          </a>
        );
      })}
    </div>
  );
};
