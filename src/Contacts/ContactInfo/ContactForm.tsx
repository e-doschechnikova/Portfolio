import React from "react";
import style from "./ContactForm.module.scss";

export const ContactForm = () => {
    return <form className={style.contactsForm}>
        <div className={style.inputForm}>
            <input type="text" placeholder={'Name'}/>
            <input type="text" placeholder={'E-mail'}/>
        </div>
        <textarea placeholder={'Message'}/>
        <div>
            <button type={'submit'} className={style.sendBtn}>Send message</button>
        </div>
    </form>
}