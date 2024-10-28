import {Route, Routes} from "react-router-dom";
import HomeScreen, {kHomeRoute} from "./screens/HomeScreen.tsx";
import LoginScreen, {kLoginRoute} from "./screens/LoginScreen.tsx";
import ForgotPasswordScreen, {kForgotPasswordRoute} from "./screens/ForgotPasswordScreen.tsx";
import ProfileScreen, {kProfileRoute} from "./screens/ProfileScreen.tsx";
import RegisterScreen, {kRegisterRoute} from "./screens/RegisterScreen.tsx";

export default function Router() {
    return <Routes>
        <Route path={kHomeRoute} element={<HomeScreen/>}/>
        <Route path={kLoginRoute} element={<LoginScreen/>}/>
        <Route path={kRegisterRoute} element={<RegisterScreen/>}/>
        <Route path={kForgotPasswordRoute} element={<ForgotPasswordScreen/>}/>
        <Route path={kProfileRoute} element={<ProfileScreen/>}/>
    </Routes>;
}