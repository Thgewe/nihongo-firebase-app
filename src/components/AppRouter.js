import React from 'react';
import {Routes, Route, Navigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {privateRoutes, publicRoutes} from "../routes";
import {DICTIONARY_ROUTE, LOGIN_ROUTE} from "../utils/constants";

const AppRouter = () => {
    const auth = useSelector(state => state.auth)
    return auth ?
        <Routes>
            {privateRoutes.map(({path, component}) =>
                <Route path={path} element={component} exact={true} key={path}/>
            )}
            <Route path={'*'} element={<Navigate to={DICTIONARY_ROUTE} replace/>}/>
        </Routes>
        :
        <Routes>
            {publicRoutes.map(({path, component}) =>
                <Route path={path} element={component} exact={true} key={path}/>
            )}
            <Route path={'*'} element={<Navigate to={LOGIN_ROUTE} replace/>}/>
        </Routes>

};

export default AppRouter;