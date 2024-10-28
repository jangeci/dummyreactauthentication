import {Container, Nav, Navbar, NavLink} from "react-bootstrap";
import {kProfileRoute} from "../screens/ProfileScreen.tsx";
import {kLoginRoute} from "../screens/LoginScreen.tsx";
import {kRegisterRoute} from "../screens/RegisterScreen.tsx";

function AppNav() {

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
                        <NavLink href={kLoginRoute}>Login</NavLink>
                        <NavLink href={kRegisterRoute}>Register</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default AppNav;