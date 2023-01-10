import React, {FC, ReactNode, useState} from 'react';
import classes from "./Input.module.scss"

type CommonInputProps = {

}

type EmailInputProps = CommonInputProps & {
    login?: boolean
    password?: never
    tel?: never
}

type PasswordInputProps = CommonInputProps & {
    login?: never
    password?: boolean
    tel?: never
}

type TelInputProps = CommonInputProps & {
    login?: never
    password?: never
    tel?: boolean
}

type InputProps = EmailInputProps | PasswordInputProps | TelInputProps

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
