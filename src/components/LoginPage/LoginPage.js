import React, {useState} from 'react';
import cl from './loginPage.module.scss';
import LoginForm from "../LoginForm/LoginForm";

const LoginPage = () => {
    const [registration, setRegistration] = useState(false);

    const changeForm = () => {
        setRegistration(!registration)
    }

    return (
        <div className={cl.login}>
            <div className={cl.form}>
                {!registration ?
                    <>
                        <LoginForm />
                        <div
                            className={cl.text}>Еще нет аккаунта?
                            <span onClick={() => changeForm()}>Зарегистрироваться</span>
                        </div>
                    </>
                    :
                    <>
                        <LoginForm registration={registration}/>
                        <div className={cl.text}>
                            Есть аккаунт?
                            <span onClick={() => changeForm()}>Войти</span>
                        </div>
                    </>
                }
            </div>
        </div>
    );
};

export default LoginPage;