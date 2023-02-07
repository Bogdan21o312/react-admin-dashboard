import React, {FC, ReactNode} from 'react';
import classes from "./Entrance.module.scss";
// @ts-ignore
import {CSSTransition} from 'react-transition-group';

interface EntranceAnimatedProps {
    children: ReactNode
    state: boolean
}

const EntranceAnimated: FC<EntranceAnimatedProps> = ({state, children}) => {
    return (
        <>
            <CSSTransition
                in={state}
                timeout={1250}
                classNames={{
                    enterActive: classes.mainEnterActive,
                    enterDone: classes.mainEnterDone,
                    exitActive: classes.mainExit,
                    exitDone: classes.mainExitActive
                }}
            >
                <div className={classes.mainEnter}>
                    {children}
                </div>
            </CSSTransition>
        </>
    );
};

export default EntranceAnimated;
