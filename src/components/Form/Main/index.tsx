import {ChangeEvent, FC, useEffect, useState} from 'react';
import {useInput} from "../../../hooks/useInput";

interface FormProps {
    title: string;
    handleClick: (email: string, pass: string) => void;
}


const Index: FC<FormProps> = ({title, handleClick}) => {
    const email = useInput('', {isEmpty: true, isEmail: true})
    const password = useInput('', {isEmpty: true})
    return (
        <div>
            {(email.isDirty && email.isEmpty) && <div style={{color: 'red'}}>{email.isEmptyText}</div>}
            <div>
                <input
                    onBlur={e => email.onBlur(e)}
                    type="email"
                    name="email"
                    value={email.value}
                    onChange={(e) => email.onChange(e)}
                    placeholder="email"/>
            </div>
            <div className="form-group my-3">
                <input type="password" value={password.passwordInput.password}  onChange={password.handlePasswordChange} onKeyUp={password.handleValidation} name="password" placeholder="Password" className="form-control" />
                <div style={{color: 'red'}}>{password.passwordError}</div>
            </div>
            <div className="form-group my-3">
                <input type="password" value={password.passwordInput.confirmPassword}  onChange={password.handlePasswordChange} onKeyUp={password.handleValidation} name="confirmPassword" placeholder="Password" className="form-control" />
                <div style={{color: 'red'}}>{password.confirmPasswordError}</div>
            </div>
            <button
                disabled={!email.formValid || !password.formValid}
                onClick={() => handleClick(email.value, password.value)}
            >
                {title}
            </button>
        </div>
    )
}

export {Index}
