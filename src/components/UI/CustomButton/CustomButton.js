import React from 'react';
import cl from './customButton.module.scss';

const CustomButton = ({onClick, type, children}) => {
    return (
        <button type={type} onClick={onClick} className={cl.button}>
            {children}
        </button>
    );
};

export default CustomButton;