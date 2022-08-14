import React from 'react';
import cl from './hiragana.module.scss';

const Hiragana = ({hiragana}) => {
    return (
        <div className={cl.hiragana}>
            {hiragana}
        </div>
    );
};

export default Hiragana;