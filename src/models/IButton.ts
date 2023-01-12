import {ComponentProps, ElementType, ReactNode} from "react";

type ButtonOwnProps<E extends ElementType = ElementType> = {
    as?: E;
    secondary?: boolean
    children: ReactNode;
};


export type ButtonProps<E extends ElementType> = ButtonOwnProps<E> &
    Omit<ComponentProps<E>, keyof ButtonOwnProps>;
