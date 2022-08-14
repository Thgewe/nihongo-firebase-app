import React from 'react';
import cl from './header.module.scss';
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import Furigana from "../UI/Furigana/Furigana";

const Header = () => {
    return (
        <header className={cl.header}>
            <div className={cl.container}>
                <Link className={cl.logo + ' link-zero'} to={'/dictionary'}>
                    <Furigana
                        kanji={'辞書'}
                        furigana={'じしょ'}
                        size={0.4}
                    />
                </Link>
                <Navbar />
            </div>
        </header>
    );
};

export default Header;