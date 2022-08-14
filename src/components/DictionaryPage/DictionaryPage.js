import React from 'react';
import cl from './dictionaryPage.module.scss';
import Book from "../Book/Book";
import Settings from "../Settings/Settings";

const DictionaryPage = () => {
    return (
        <div className={cl.page}>
            <div className={cl.container}>
                <div className={cl.settings}>
                    <Settings />
                </div>
                <div className={cl.book}>
                    <Book />
                </div>
            </div>
        </div>
    );
};

export default DictionaryPage;