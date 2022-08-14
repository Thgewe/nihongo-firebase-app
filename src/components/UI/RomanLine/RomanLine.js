import React from 'react';
import cl from './romanLine.module.scss';

const RomanLine = ({children}) => {
    return (
        <p className={cl.line}>
            {children}
        </p>
    );
};

export default RomanLine;