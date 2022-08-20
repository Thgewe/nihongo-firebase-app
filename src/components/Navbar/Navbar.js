import React from 'react';
import cl from './navbar.module.scss';
import {auth} from "../../firebase";
import {useDispatch, useSelector} from "react-redux";
import {logoutAuthAction} from "../../store/authReducer";
import {clearCollections} from "../../store/firebaseCollectionsReducer";

const Navbar = () => {
    const dispatch = useDispatch();
    const isAuth = useSelector(state => state.auth);

    const onLogout = () => {
        auth.signOut();
        dispatch(clearCollections())
        dispatch(logoutAuthAction())
    }

    return (
        <nav className={cl.nav}>
            {isAuth ?
                <button
                    className={cl.logout}
                    onClick={onLogout}
                >
                    Logout
                </button>
                :
                null
            }

        </nav>
    );
};

export default Navbar;