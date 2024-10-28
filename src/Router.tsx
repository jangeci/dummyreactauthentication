import {Route, Routes} from "react-router-dom";
import HomeScreen, {kHomeRoute} from "./screens/HomeScreen.tsx";
import LoginScreen, {kLoginRoute} from "./screens/LoginScreen.tsx";
import ForgotPasswordScreen, {kForgotPasswordRoute} from "./screens/ForgotPasswordScreen.tsx";
import ProfileScreen, {kProfileRoute} from "./screens/ProfileScreen.tsx";
import RegisterScreen, {kRegisterRoute} from "./screens/RegisterScreen.tsx";
import ResetPasswordScreen, {kResetPasswordRoute} from "./screens/ResetPasswordScreen.tsx";
import ProtectedRoute from "./core/ProtectedRoute.tsx";

export default function Router() {
    return <Routes>
        <Route path={kHomeRoute} element={
            <ProtectedRoute>
                <HomeScreen/>
            </ProtectedRoute>
        }/>
        <Route path={kProfileRoute} element={
            <ProtectedRoute>
                <ProfileScreen/>
            </ProtectedRoute>
        }/>
        <Route path={kLoginRoute} element={<LoginScreen/>}/>
        <Route path={kRegisterRoute} element={<RegisterScreen/>}/>
        <Route path={kForgotPasswordRoute} element={<ForgotPasswordScreen/>}/>
        <Route path={kResetPasswordRoute} element={<ResetPasswordScreen/>}/>
    </Routes>;
}