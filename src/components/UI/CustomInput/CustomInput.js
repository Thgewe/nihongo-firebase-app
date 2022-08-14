import React from 'react';
import cl from './customInput.module.scss';

const CustomInput = ({placeholder, type, onInput, value}) => {
    return (
        <input
            type={type}
            className={cl.input}
            placeholder={placeholder}
            onInput={(e) => onInput(e.target.value)}
            value={value}
        />
    );
};

export default CustomInput;