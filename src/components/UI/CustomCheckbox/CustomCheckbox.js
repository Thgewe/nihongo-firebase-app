import React from 'react';
import cl from './customCheckbox.module.scss';

const CustomCheckbox = ({onChange, id, checked}) => {
    return (
        <div className={cl.check}>
            <input
                type="checkbox"
                className={cl.input}
                id={id}
                onChange={onChange}
                checked={checked}
            />
            <label htmlFor={id} className={cl.label}></label>
        </div>
    );
};

export default CustomCheckbox;