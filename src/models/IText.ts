import {ComponentProps, ElementType, ReactNode} from "react";

type ITextDarkProps = {
    dark?: boolean
    secondary?: never
};

type ITextSecondaryProps = {
    dark?: never
    secondary?: boolean
};

type ITextOwnProps<E extends ElementType = ElementType> = ITextDarkProps | ITextSecondaryProps & {
    as?: E;
    children: ReactNode;
};


export const defaultElementText = "div";
export type ITextProps<E extends ElementType> = ITextOwnProps<E>  &
    Omit<ComponentProps<E>, keyof ITextOwnProps>;
