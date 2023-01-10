import React from 'react';
import style from './Button.module.scss'

export const Button = ({text}: ButtonPropsType) => {
    return (
        <a href={""} className={style.btn}>{text}</a>
    );
};

type ButtonPropsType = {
    text: string
}