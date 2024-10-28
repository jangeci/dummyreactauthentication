import AppNav from "./AppNav.tsx";
import {useContext, useEffect} from "react";
import axios from "axios";
import {AppContext} from "../App.tsx";

function Header() {
    const {user, setUser} = useContext(AppContext);

    useEffect(() => {
        if (!user) {
            axios.get('/user', {})
                .then(function (response) {
                    console.log(response);
                    setUser!(
                        response.data
                    );
                    localStorage.setItem('user', JSON.stringify(response.data));
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }, []);

    return (
        <div>
            <AppNav/>
        </div>
    );
}

export default Header;