import {useEffect, useState} from "react";

export const useValidation = (value: string, validations: []) => {
    const [isEmpty, setEmpty] = useState(true)
    const [isEmptyText, setEmptyText] = useState('is not empty')
    const [minLengthError, setMinLengthError] = useState(false)
    const [minLengthTextError, setMinLengthTextError] = useState('Password must contain at least 8 characters')
    const [maxLengthError, setMaxLengthError] = useState(false)
    const [maxLengthTextError, setMaxLengthTextError] = useState('')
    const [formValid, setFormValid] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [emailTextError, setEmailTextError] = useState('')
    const [passwordError, setPasswordErr] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    const [passwordInput, setPasswordInput] = useState({
        password: '',
        confirmPassword: ''
    })
    const handlePasswordChange = (e: any) => {

        const passwordInputValue = e.target.value.trim();
        const passwordInputFieldName = e.target.name;
        const NewPasswordInput = {...passwordInput, [passwordInputFieldName]: passwordInputValue}
        setPasswordInput(NewPasswordInput);
    }
    const handleValidation = (e: any) => {
        const passwordInputValue = e.target.value.trim();
        const passwordInputFieldName = e.target.name;

        if (passwordInputFieldName === 'password') {
            const uppercaseRegExp = /(?=.*?[A-Z])/;
            const lowercaseRegExp = /(?=.*?[a-z])/;
            const digitsRegExp = /(?=.*?[0-9])/;
            const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;
            const minLengthRegExp = /.{8,}/;

            const passwordLength = passwordInputValue.length;
            const uppercasePassword = uppercaseRegExp.test(passwordInputValue);
            const lowercasePassword = lowercaseRegExp.test(passwordInputValue);
            const digitsPassword = digitsRegExp.test(passwordInputValue);
            const specialCharPassword = specialCharRegExp.test(passwordInputValue);
            const minLengthPassword = minLengthRegExp.test(passwordInputValue);

            let errMsg = "";
            if (passwordLength === 0) {
                errMsg = "Password is empty";
            } else if (!uppercasePassword) {
                errMsg = "At least one Uppercase";
            } else if (!lowercasePassword) {
                errMsg = "At least one Lowercase";
            } else if (!digitsPassword) {
                errMsg = "At least one digit";
            } else if (!specialCharPassword) {
                errMsg = "At least one Special Characters";
            } else if (!minLengthPassword) {
                errMsg = "At least minumum 8 characters";
            } else {
                errMsg = "";
            }
            setPasswordErr(errMsg);
        }

        if (passwordInputFieldName === "confirmPassword" || (passwordInputFieldName === "password" && passwordInput.confirmPassword.length > 0)) {

            if (passwordInput.confirmPassword !== passwordInput.password) {
                setConfirmPasswordError("Confirm password is not matched");
            } else {
                setConfirmPasswordError("");
            }

        }
    }
    useEffect(() => {
        for (const validation in validations) {
            switch (validation) {
                case 'minLength':
                    if (value.length < validations[validation]) {
                        setMinLengthTextError(`Field cannot contain less ${validations[validation]} characters`)
                        setMinLengthError(false)
                    } else {
                        setMinLengthTextError('')
                        setMinLengthError(true)
                    }
                    break
                case 'maxLength':
                    if (value.length > validations[validation]) {
                        setMaxLengthTextError(`Field cannot contain more ${validations[validation]} characters`)
                        setMaxLengthError(false)
                    } else {
                        setMaxLengthTextError('')
                        setMaxLengthError(true)
                    }
                    break
                case 'isEmpty':
                    if (value) {
                        setEmpty(false)
                    } else  {
                        setEmpty(true)
                    }
                    break
                case 'isEmail':
                    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
                    if (!re.test(String(value).toLowerCase())) {
                        setEmailTextError('Invalid email')
                    } else {
                        setEmailTextError('')
                    }
                    break
                case 'password':
                   
                    break
                case 'confirmPassword':

                    break
            }
        }
    }, [value])
    useEffect(() => {
        if (isEmpty || maxLengthError || minLengthError || emailError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [isEmpty, maxLengthError, minLengthError, emailError])

    return {
        isEmpty,
        minLengthTextError,
        maxLengthTextError,
        formValid,
        isEmptyText,
        emailTextError,

        passwordInput,
        passwordError,
        confirmPasswordError,
        handlePasswordChange,
        handleValidation,
    }
}