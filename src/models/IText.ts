import {ComponentProps, ElementType, ReactNode} from "react";

type ITextTitleProps<E extends ElementType = ElementType> = {
    title?: boolean
    text?: never
    link?: never
    center?: boolean
    as?: E;
};

type ITextTextProps<E extends ElementType = ElementType> = {
    title?: never
    text?: boolean
    link?: never
    center?: boolean
    as?: E;
};

type ITextLinkProps<E extends ElementType = ElementType> = {
    title?: never
    text?: never
    link?: boolean
    center?: boolean
    as?: E;
};

type ITextOwnProps<E extends ElementType = ElementType> = ITextTitleProps | ITextTextProps | ITextLinkProps & {
    as?: E;
    children: ReactNode;
};


export const defaultElementText = "div";
export type ITextProps<E extends ElementType> = ITextOwnProps<E>  &
    Omit<ComponentProps<E>, keyof ITextOwnProps>;
