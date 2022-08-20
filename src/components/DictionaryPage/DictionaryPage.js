import React from 'react';
import cl from './dictionaryPage.module.scss';
import Book from "../Book/Book";
import Settings from "../Settings/Settings";
import SelectProduct from "../SelectProduct/SelectProduct";
import Info from "../Info/Info";

const DictionaryPage = () => {
    return (
        <div className={cl.page}>
            <div className={cl.container}>
                <div className={cl.settings}>
                    <Info />
                    <SelectProduct />
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