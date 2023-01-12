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

export type InputProps = EmailInputProps | PasswordInputProps | TelInputProps
