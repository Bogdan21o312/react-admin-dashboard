import React, {ElementType} from 'react';
import classes from "./Section.module.scss"
import {defaultElementSection, ISectionProps} from "../../../models/ISection";

const Index = <E extends ElementType = typeof defaultElementSection>({as, primary, secondary, children, center, ...otherProps}: ISectionProps<E>) => {
    const TagName = as || defaultElementSection;

    const classesMain = classes.main
    let classesName = [classesMain]
    const classesPrimary = classes.primary
    const classesSecondary = classes.secondary

    if (primary) {
        classesName.push(classesPrimary)
    }
    if (secondary) {
        classesName.push(classesSecondary)
    }


    return <TagName className={classesName.join(' ')} {...otherProps}>{children}</TagName>
};

export default Index;
