import React, {ElementType} from 'react';
import {defaultElementText, ITextProps} from "../../../models/IText";
import classes from "./Text.module.scss";

const Index = <E extends ElementType = typeof defaultElementText>({as, title, text, children, center, link, ...otherProps}: ITextProps<E>) => {
    const TagName = as || defaultElementText;

    const classesMain = classes.main
    let classesName = [classesMain]
    const classesTitle = classes.title
    const classesText = classes.text
    const classesLink = classes.link
    const classesCenter = classes.center

    if (title) {
        classesName.push(classesTitle)
    }
    if (text) {
        classesName.push(classesText)
    }
    if (link) {
        classesName.push(classesLink)
    }
    if (center) {
        classesName.push(classesCenter)
    }


    return <TagName className={classesName.join(' ')} {...otherProps}>{children}</TagName>
};

export default Index;
