import React from "react";
import style from "./ContactForm.module.scss";
import {useFormik} from "formik";
import {api} from "../../api/api";

export type FormType = {
    name?: string
    email?: string
    message?: string
}

export const ContactForm = () => {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: '',
        },
        validate: (values) => {
            const errors: FormType = {}
            if (!values.name) {
                errors.name = 'please enter your name';
            }

            if (!values.email) {
                errors.email = 'please enter your email';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'please enter valid email';
            }

            if (!values.message) {
                errors.message = 'please enter your message';
            } else if (values.message.length < 2) {
                errors.message = 'your message is too short';
            }

            return errors;
        },
        validateOnBlur: false,
        onSubmit: (values, {resetForm}) => {
            api.sendEmail(values)
            resetForm()
        }
    });

    return <form onSubmit={formik.handleSubmit} className={style.contactsForm}>
        <div className={style.inputForm}>
            <input type="text" placeholder={'Name'}  {...formik.getFieldProps('name')}/>
            <p className={style.error}>{formik.touched.name && formik.errors.name && formik.errors.name}</p>
            <input type="text" placeholder={'E-mail'} {...formik.getFieldProps('email')}/>
            <p className={style.error}>{formik.touched.email && formik.errors.email && formik.errors.email}</p>
        </div>
        <textarea placeholder={'Message'} {...formik.getFieldProps('message')}/>
        <p className={style.error}>{formik.touched.message && formik.errors.message && formik.errors.message} </p>
        <button type={'submit'} className={style.sendBtn}>Send message</button>
    </form>
}