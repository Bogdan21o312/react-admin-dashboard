import React, {FC, ReactNode, useState} from 'react';
import classes from "./Input.module.scss"
import {InputProps} from "../../../models/IInput";

const Index:FC<InputProps> = ({login, password, tel}) => {
    let typeValue = 'text'
    if (login) {
        typeValue = 'email'
    }
    if (password) {
        typeValue = 'password'
    }
    if (tel) {
        typeValue = 'tel'
    }
    return <input type={typeValue}/>
};

export default Index;
