type CommonIInputProps = {

}

type EmailIInputProps = CommonIInputProps & {
    login?: boolean
    password?: never
    tel?: never
}

type PasswordIInputProps = CommonIInputProps & {
    login?: never
    password?: boolean
    tel?: never
}

type TelIInputProps = CommonIInputProps & {
    login?: never
    password?: never
    tel?: boolean
}

export type IInputProps = EmailIInputProps | PasswordIInputProps | TelIInputProps
