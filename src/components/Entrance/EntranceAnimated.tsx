import React, {FC, ReactNode} from 'react';
import classes from "./Entrance.module.scss";
// @ts-ignore
import {CSSTransition} from 'react-transition-group';

interface EntranceAnimatedProps {
    children: ReactNode
    state: boolean
    functiaaon: any
    // styleClasses: any
}

const EntranceAnimated: FC<EntranceAnimatedProps> = ({state, children, functiaaon}) => {
    const aa = functiaaon + 'ExitActive'
    const bb = functiaaon + 'Exit'
    const cc = functiaaon + 'EnterDone'
    const dd = functiaaon + 'EnterActive'
    console.log(classes.functiaaon + 'ExitActive')

    const a = classes.aa
    const b = `${classes + '.' + bb}`
    const c = `${classes + '.' + cc}`
    const d = `${classes + '.' + dd}`
    // console.log(a)
    // console.log(b)
    return (
        <>
            <CSSTransition
                in={state}
                timeout={1250}
                classNames={{
                    enterActive: d,
                    enterDone: c,
                    exitActive: b,
                    exitDone: a
                }}
            >
                {children}
            </CSSTransition>
        </>
    );
};

export default EntranceAnimated;
