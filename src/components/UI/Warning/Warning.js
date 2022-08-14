import React from 'react';
import cl from './warning.module.scss';

const Warning = ({condition, children}) => {
    return condition ?
        <div className={cl.warning}>
            {children}
        </div>
        :
        <></>
};

export default Warning;