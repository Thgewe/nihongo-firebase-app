import './App.scss';
import {useDispatch} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Loader from "./components/Loader/Loader";
import Layout from "./components/Layout/Layout";


import {auth} from "./firebase";
import {loginAuthAction, logoutAuthAction} from "./store/authReducer";
import {useAuthState} from "react-firebase-hooks/auth";



function App() {
    const dispatch = useDispatch();
    const [user, loading] = useAuthState(auth);

    auth.onAuthStateChanged((user) => {
        dispatch(user === null ? logoutAuthAction() : loginAuthAction())
    })

    if (loading) return <Loader />
    return (
        <BrowserRouter>
            <Layout>
                <AppRouter />
            </Layout>
        </BrowserRouter>
    );
}

export default App;
