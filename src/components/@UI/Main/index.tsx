import React, {FC, ReactNode} from 'react';

interface MainProps {
    children: ReactNode
}

const Index:FC<MainProps> = ({children}) => {
    return (
        <main>
            {children}
        </main>
    );
};

export default Index;