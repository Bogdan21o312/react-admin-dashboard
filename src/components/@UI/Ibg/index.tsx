import React, {FC, ReactNode} from 'react';
import classes from "./Ibg.module.scss"

interface IbgProps {
    children: ReactNode
}

const Index: FC<IbgProps> = ({children}) => {
    return (
        <div className={classes.Ibg}>
            {children}
        </div>
    );
};

export default Index;