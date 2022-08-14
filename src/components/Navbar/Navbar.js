import React from 'react';
import cl from './navbar.module.scss';
import {auth} from "../../firebase";
import {useDispatch, useSelector} from "react-redux";
import {logoutAuthAction} from "../../store/authReducer";

const Navbar = () => {
    const dispatch = useDispatch();
    const isAuth = useSelector(state => state.auth);
    return (
        <nav className={cl.nav}>
            {isAuth ?
                <button
                    className={cl.logout}
                    onClick={() => {
                        auth.signOut();
                        dispatch(logoutAuthAction())
                    }}
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