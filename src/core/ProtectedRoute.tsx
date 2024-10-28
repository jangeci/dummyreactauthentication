import React, {useContext} from 'react';
import {AppContext} from "../App.tsx";
import {Navigate} from "react-router-dom";

interface IProtectedRouteProps {
    children: React.ReactNode;
}

export default function ProtectedRoute(props: IProtectedRouteProps) {
    const {children} = props;
    const {user} = useContext(AppContext);

    return user ? <>{children}</> : <Navigate to="/login"/>;
};

