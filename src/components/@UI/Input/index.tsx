import React, {FC, ReactNode, useState} from 'react';
import classes from "./Input.module.scss"
import {IInputProps} from "../../../models/IInput";

const Index:FC<IInputProps> = ({login, password, tel, ...otherProps}) => {
    let typeValue = 'text'
    let classesName = classes.input
    if (login) {
        typeValue = 'email'
    }
    if (password) {
        typeValue = 'password'
    }
    if (tel) {
        typeValue = 'tel'
    }
    return <input className={classesName} type={typeValue} {...otherProps}/>
};

export default Index;
