import React, {FC, ReactNode} from 'react';
import classes from "../../assets/style/Style.module.scss"

interface WrapperProps {
    children: ReactNode
}

const Wrapper: FC<WrapperProps> = ({children}) => {
    return (
        <div className={classes.Wrapper}>
            {children}
        </div>
    );
};

export default Wrapper;