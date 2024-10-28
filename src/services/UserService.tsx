import {AxiosResponse} from "axios";

export function Login(response: AxiosResponse) {
    localStorage.setItem('token', response.data.token);
    localStorage.setItem('user', JSON.stringify(response.data.user));
}

export function Logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
}