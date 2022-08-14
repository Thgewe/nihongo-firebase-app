import React, {useState} from 'react';
import cl from './loginForm.module.scss';
import CustomInput from "../UI/CustomInput/CustomInput";
import CustomButton from "../UI/CustomButton/CustomButton";
import Warning from "../UI/Warning/Warning";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";
import { auth } from "../../firebase";
import {useDispatch, useSelector} from "react-redux";
import {loginAuthAction} from "../../store/authReducer";

const LoginForm = ({registration}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [empty, setEmpty] = useState(false);
    const [error, setError] = useState('');

    const dispatch = useDispatch();
    const isAuth = useSelector(state => state.auth);

    const onSubmit = (e) => {
        e.preventDefault();
        if (email === '' || password === '') {
            setEmpty(true);
            return
        }
        // firebase registration/authentication

        if (registration) {
            createUserWithEmailAndPassword(auth, email, password)
                .then(() => {
                    dispatch(loginAuthAction());
                })
                .catch((error) => {
                    const errorCode = error.code;
                    setError(errorCode)
                });
        } else {
            signInWithEmailAndPassword(auth, email, password)
                .then(() => {
                    dispatch(loginAuthAction());
                })
                .catch((error) => {
                    const errorCode = error.code;
                    setError(errorCode)
                });
        }

        setEmail('');
        setPassword('');
    }

    const onInputEmail = (value) => {
        if (empty) setEmpty(false);
        if (error) setError('');
        setEmail(value);
    }
    const onInputPassword = (value) => {
        if (empty) setEmpty(false);
        if (error) setError('');
        setPassword(value);
    }

    return (
        <form className={cl.form} onSubmit={onSubmit}>
            <div className={cl.title}>
                {registration ?
                    'Регистрация'
                    :
                    'Вход'
                }
            </div>
            <CustomInput
                placeholder={'email'}
                type={'text'}
                value={email}
                onInput={onInputEmail}
            />
            <CustomInput
                placeholder={'password'}
                type={'password'}
                value={password}
                onInput={onInputPassword}
            />
            <Warning condition={empty}>fill in the input fields</Warning>
            <Warning condition={error}>{error}</Warning>
            <CustomButton type={'submit'} onClick={onSubmit}>
                {registration ?
                    'Зарегистрироваться'
                    :
                    'Войти'
                }
            </CustomButton>
        </form>
    );
};

export default LoginForm;