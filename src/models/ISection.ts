import {ComponentProps, ElementType, ReactNode} from "react";

type ISectionPrimaryProps<E extends ElementType = ElementType> = {
    primary?: boolean
    secondary?: never
    as?: E;
};

type ISectionSecondaryProps<E extends ElementType = ElementType> = {
    primary?: never
    secondary?: boolean
    as?: E;
};

type ISectionOwnProps<E extends ElementType = ElementType> = ISectionPrimaryProps | ISectionSecondaryProps & {
    as?: E;
    children: ReactNode;
};

export const defaultElementSection = "section";
export type ISectionProps<E extends ElementType> = ISectionOwnProps<E> &
    Omit<ComponentProps<E>, keyof ISectionOwnProps>;
