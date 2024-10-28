import {Container, Nav, Navbar, NavLink} from "react-bootstrap";
import {kProfileRoute} from "../screens/ProfileScreen.tsx";
import {kLoginRoute} from "../screens/LoginScreen.tsx";
import {kRegisterRoute} from "../screens/RegisterScreen.tsx";
import {Logout} from "../services/UserService.tsx";
import {useContext} from "react";
import {AppContext} from "../App.tsx";

function AppNav() {
    const {setUser} = useContext(AppContext);
    const token = localStorage.getItem('token');

    const buttonsJSX = (
        <>
            {token ? <NavLink href={kLoginRoute} onClick={() => {
                Logout();
                setUser!(undefined);
            }
            }>Logout</NavLink> : <>
                <NavLink href={kLoginRoute}>Login</NavLink>
                <NavLink href={kRegisterRoute}>Register</NavLink>
            </>}
        </>
    );

    return (
        <Navbar className="bg-body-tertiary" expand="lg">
            <Container>
                <Navbar.Toggle/>
                <Navbar.Collapse>
                    <Nav className="me-auto">
                        <NavLink href="/">Home</NavLink>
                        <NavLink href={kProfileRoute}>Profile</NavLink>
                    </Nav>

                    <Nav>
                        {buttonsJSX}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default AppNav;