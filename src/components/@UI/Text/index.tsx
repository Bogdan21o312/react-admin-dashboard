import React, {ElementType} from 'react';
import {ITextProps} from "../../../models/IText";
import classes from "./Text.module.scss";

const defaultElementText = "div";
const Index = <E extends ElementType = typeof defaultElementText>({as, secondary, dark, children, ...otherProps}: ITextProps<E>) => {
    let classesName = classes.button
    const TagName = as || defaultElementText;
    return <TagName className={classesName} {...otherProps}>{children}</TagName>
};

export default Index;
