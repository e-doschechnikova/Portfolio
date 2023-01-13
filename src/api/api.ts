import emailjs from '@emailjs/browser';
import {toast} from 'react-toastify';
import {FormType} from "../Contacts/ContactInfo/ContactForm";

export const api = {
    sendEmail(data: Required<FormType>) {
        emailjs.send('service_eyvalbg', 'template_89bho5v', data, 'jTlj2F6t6y-AZfcTR')
            .then((result) => {
                toast.success('Message sent! I will contact you as soon as possible.', {
                    position: 'top-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'colored',
                });
            }, (error) => {
                toast.error('Something went wrong, please try again later.', {
                    position: 'top-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'colored',
                });
            });
    }
}