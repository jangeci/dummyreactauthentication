import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./common/Header.tsx";
import {BrowserRouter} from "react-router-dom";
import Router from "./Router.tsx";
import axios from "axios";
import {kBaseUrl} from "./core/config.tsx";
import User from "./model/User.tsx";
import {createContext, Dispatch, SetStateAction, useState} from "react";

export interface IAppContext {
    user: User | undefined;
    setUser: Dispatch<SetStateAction<User | undefined>> | undefined;
}

export const AppContext = createContext<IAppContext>({} as IAppContext);

function App() {

    const [user, setUser] = useState<User | undefined>(() => {
        const savedUser = localStorage.getItem('user');
        return savedUser ? JSON.parse(savedUser) : null;
    });

    axios.defaults.baseURL = kBaseUrl;
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');


    const appContext: IAppContext = {
        user: user,
        setUser: setUser,
    }

    return (
        <>
            <AppContext.Provider value={appContext}>
                <BrowserRouter>
                    <Header/>
                    <Router/>
                </BrowserRouter>
            </AppContext.Provider>
        </>
    )
}

export default App
