import {DICTIONARY_ROUTE, LOGIN_ROUTE} from "./utils/constants";
import LoginPage from "./components/LoginPage/LoginPage";
import DictionaryPage from "./components/DictionaryPage/DictionaryPage";

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        component: <LoginPage />,
    }
]
export const privateRoutes = [
    {
        path: DICTIONARY_ROUTE,
        component: <DictionaryPage />,
    }
]