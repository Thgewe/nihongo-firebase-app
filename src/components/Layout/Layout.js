import React from 'react';
import cl from './layout.module.scss';
import Header from "../Header/Header";

const Layout = ({children}) => {
    return (
        <div className={cl.container}>
            <Header />
            <main className={cl.main}>
                {children}
            </main>
        </div>
    );
};

export default Layout;