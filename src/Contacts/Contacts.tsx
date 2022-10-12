import React from "react";
import style from "./Contacts.module.css"
import styleContainer from "../Common/Styles/Container.module.css";
import {Title} from "../Components/Title/Title";

export const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={styleContainer.container}>
                <div className={style.contactsContainer}>
                    <Title title={"Contacts"}/>
                    <form className={style.contactsForm}>
                        <input type="text" placeholder={'Name'}/>
                        <input type="text" placeholder={'E-mail'}/>
                        <textarea placeholder={'Message'}/>
                        <button type={'submit'} className={style.sendBtn}>Send message</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

