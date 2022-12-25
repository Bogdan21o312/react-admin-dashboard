import {ComponentProps, ElementType, ReactNode} from "react";
import classes from "./Button.module.scss"

type CommonButtonOwnProps<E extends ElementType = ElementType> = {
    children: ReactNode;
    as?: E;
};

type PrimaryButtonProps = CommonButtonOwnProps & {
    primary: boolean;
    arrow?: boolean;
    secondary?: never;
    icon?: never;
};
type SecondaryButtonProps = CommonButtonOwnProps & {
    secondary: boolean;
    icon?: ReactNode;
    primary?: never;
    arrow?: never;
};

type VariantButtonProps =  PrimaryButtonProps | SecondaryButtonProps;


type ButtonProps<E extends ElementType> = CommonButtonOwnProps<E> &
    Omit<ComponentProps<E>, keyof CommonButtonOwnProps>;

const defaultElement = "button";

export default function Button<E extends ElementType = typeof defaultElement>({children, primary, secondary, as, ...otherProps}: ButtonProps<E>) {
    const variant = `${classes.Button}`;
    const TagName = as || defaultElement;

    return (
        <TagName className={variant} {...otherProps}>
            {children}
        </TagName>
    );
}
