import React from "react";
import style from "./Contacts.module.scss"
import {ContactInfo} from "./ContactInfo/ContactInfo";
import {faTelegramPlane} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope, faLocationDot} from "@fortawesome/free-solid-svg-icons";

export const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={style.container}>
                <ContactInfo iconTitle={faTelegramPlane} contactTitle={"Phone"} data={"+1 (650) 123 4444"}
                             link={"tel:+1 (650) 123 4444"}/>
                <ContactInfo iconTitle={faEnvelope} contactTitle={"Email"} data={"info@francesgorman.com"}
                             link={""}/>
                <ContactInfo iconTitle={faLocationDot} contactTitle={"Location"}
                             data={"2 Curiosity Way, 94403, California, United States"}
                             link={""}/>
                <div className={style.contactsContainer}>
                    <h6 className={style.subheadingTitle}>Get in touch</h6>
                    <h2>Contact Me</h2>
                    <form className={style.contactsForm}>
                        <div className={style.inputForm}>
                            <input type="text" placeholder={'Name'}/>
                            <input type="text" placeholder={'E-mail'}/>
                        </div>
                        <textarea placeholder={'Message'}/>
                        <div>
                            <button type={'submit'} className={style.sendBtn}>Send message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

