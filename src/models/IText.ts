import {ComponentProps, ElementType, ReactNode} from "react";

type ITextDarkProps<E extends ElementType = ElementType> = {
    dark?: boolean
    secondary?: never
    as?: E;
};

type ITextSecondaryProps<E extends ElementType = ElementType> = {
    dark?: never
    secondary?: boolean
    as?: E;
};

type ITextOwnProps<E extends ElementType = ElementType> = ITextDarkProps | ITextSecondaryProps & {
    as?: E;
    children: ReactNode;
};


// export const defaultElementText = "div";
export type ITextProps<E extends ElementType> = ITextOwnProps<E>  &
    Omit<ComponentProps<E>, keyof ITextOwnProps>;
