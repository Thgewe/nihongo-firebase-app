import './App.scss';
import {useDispatch, useSelector} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import Header from "./components/Header/Header";
import AppRouter from "./components/AppRouter";
import Loader from "./components/Loader/Loader";
import Layout from "./components/Layout/Layout";

import {auth, db} from "./firebase";
import {loginAuthAction, logoutAuthAction} from "./store/authReducer";
import {useCollection, useCollectionData} from "react-firebase-hooks/firestore";
import {useAuthState} from "react-firebase-hooks/auth";

function App() {
    const dispatch = useDispatch();
    // const isAuth = useSelector(state => state.auth);

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
            {/*<Header />*/}

        </BrowserRouter>
    );
}

export default App;
