import React, {memo} from 'react';
import cl from './customRadioButton.module.scss';

const CustomRadioButton = memo(({group, id, label, checked, func}) => {
    return (
        <div className={cl.radio}>
            <label htmlFor={id} className={cl.label}>{label}</label>
            <input
                type="radio"
                name={group}
                id={id}
                className={cl.input}
                checked={checked}
                onChange={func}
            />
            <label htmlFor={id} className={cl.labelInput}></label>
        </div>
    );
});

export default CustomRadioButton;