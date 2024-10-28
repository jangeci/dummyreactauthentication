import {Button, Col, Container, Form, FormControl, FormGroup, Row} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";
import {kForgotPasswordRoute} from "./ForgotPasswordScreen.tsx";
import {useContext, useState} from "react";
import axios from "axios";
import {kProfileRoute} from "./ProfileScreen.tsx";
import {Login} from "../services/UserService.tsx";
import {AppContext} from "../App.tsx";

export const kLoginRoute = '/login';

function LoginScreen() {
    const [form, setForm] = useState({
        email: '',
        password: '',
        message: '',
    });

    const navigate = useNavigate();
    const {setUser} = useContext(AppContext);

    const handleChange = (e: { target: { name: string; value: unknown; }; }) => {
        setForm(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    function formSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        axios.post('/login', {
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
                setForm(prevState => ({
                    ...prevState,
                    message: error.response.data.message
                }));
            });
    }

    const errorJSX = form.message ?
        <Col sm={12}>
            <div className="alert alert-danger" role="alert">
                {form.message}
            </div>
        </Col>
        : null;

    return (
        <div>
            <br/>
            <br/>
            <br/>
            <br/>
            <Container>
                <Row>
                    <div className="jumbotron col-lg-6 col-lg-offset-3">
                        <h3 className="text-center">Login</h3>
                        {errorJSX}
                        <Form onSubmit={formSubmit}>
                            <FormGroup controlId="formHorizontalEmail">
                                <Col sm={12}>
                                    Email
                                </Col>
                                <Col sm={12}>
                                    <FormControl name="email" type="email" placeholder="Email" onChange={handleChange}/>
                                </Col>
                            </FormGroup>

                            <FormGroup controlId="formHorizontalPassword">
                                <Col sm={12}>
                                    Password
                                </Col>
                                <Col sm={12}>
                                    <FormControl name="password" type="password" placeholder="Password" onChange={handleChange}/>
                                </Col>
                            </FormGroup>
                            <div className="clearfix"/>
                            <div className="pt-4"/>
                            <FormGroup>
                                <Col sm={12}>
                                    <Button className="btn-block" type="submit">Login</Button>
                                </Col>
                            </FormGroup>
                            <Col className="pt-4" sm={12}>
                                Forgot my password <Link to={kForgotPasswordRoute}>Click here</Link>
                            </Col>
                        </Form>
                    </div>
                </Row>
            </Container>
        </div>
    );
}

export default LoginScreen;