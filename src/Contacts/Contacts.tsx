import React from "react";
import style from "./Contacts.module.scss";
import { ContactInfo } from "./ContactInfo/ContactInfo";
import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { ContactForm } from "./ContactInfo/ContactForm";

export const Contacts = () => {
  return (
    <div id={"contacts"} className={style.contactsBlock}>
      <div className={style.container}>
        <div>
          <ContactInfo
            iconTitle={faEnvelope}
            contactTitle={"Email"}
            data={"evadrobakova@gmail.com"}
            link={""}
          />
          <ContactInfo
            iconTitle={faLocationDot}
            contactTitle={"Location"}
            data={"Saint - Petersburg, Russia"}
            link={""}
          />
        </div>
        <div className={style.contactsContainer}>
          <h6 className={style.headingTitle}>Get in touch</h6>
          <h2>Contact Me</h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};
