import classes from "./Button.module.scss"
import {defaultElementButton, IButtonProps} from "../../../models/IButton";
import {ElementType} from "react";


const Index = <E extends ElementType = typeof defaultElementButton>({as, children, primary, secondary, ...otherProps} :IButtonProps<E>) => {
    const TagName = as || defaultElementButton;

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
