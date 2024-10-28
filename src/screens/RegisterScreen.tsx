import {Button, Col, Container, Form, FormControl, FormGroup, Row} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";
import {kLoginRoute} from "./LoginScreen.tsx";
import {useContext, useState} from "react";
import axios from "axios";
import {Login, Logout} from "../services/UserService.tsx";
import {kProfileRoute} from "./ProfileScreen.tsx";
import {AppContext} from "../App.tsx";

export const kRegisterRoute = '/register';

function RegisterScreen() {
    const navigate = useNavigate();
    const {setUser} = useContext(AppContext);

    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
    });

    const handleChange = (e: { target: { name: string; value: unknown; }; }) => {
        setForm(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    function formSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        axios.post('/register', {
            ...form
        })
            .then(function (response) {
                console.log(response);
                Login(response);
                setUser!(response.data.user);
                navigate(kProfileRoute);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div>
            <br/>
            <br/>
            <br/>
            <br/>
            <Container>
                <Row>
                    <div className="jumbotron col-lg-6 col-lg-offset-3">
                        <h3 className="text-center">Register</h3>
                        <Form onSubmit={formSubmit}>
                            <FormGroup>
                                <Col sm={12}>
                                    Username
                                </Col>
                                <Col sm={12}>
                                    <FormControl name="name" type="text" placeholder="Username" onChange={handleChange}/>
                                </Col>
                            </FormGroup>

                            <FormGroup>
                                <Col sm={12}>
                                    Email
                                </Col>
                                <Col sm={12}>
                                    <FormControl name="email" type="email" placeholder="Email" onChange={handleChange}/>
                                </Col>
                            </FormGroup>

                            <FormGroup>
                                <Col sm={12}>
                                    Password
                                </Col>
                                <Col sm={12}>
                                    <FormControl name="password" type="password" placeholder="Password" onChange={handleChange}/>
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Col sm={12}>
                                    Password confirmation
                                </Col>
                                <Col sm={12}>
                                    <FormControl type="password" name="password_confirmation" placeholder="Password confirmation" onChange={handleChange}/>
                                </Col>
                            </FormGroup>
                            <div className="clearfix"/>
                            <div className="pt-4"/>
                            <FormGroup>
                                <Col sm={12}>
                                    <Button className="btn-block" type="submit">Register account</Button>
                                </Col>
                            </FormGroup>
                            <Col className="pt-4" sm={12}>
                                Have an account <Link to={kLoginRoute}>Login here</Link>
                            </Col>
                        </Form>
                    </div>
                </Row>
            </Container>
        </div>
    );
}

export default RegisterScreen;