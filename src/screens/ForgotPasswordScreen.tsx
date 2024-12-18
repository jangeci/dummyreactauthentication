import {Button, Col, Container, Form, FormControl, FormGroup, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {kRegisterRoute} from "./RegisterScreen.tsx";
import {useState} from "react";
import axios from "axios";

export const kForgotPasswordRoute = '/forgot-password';

function ForgotPasswordScreen() {
    const [form, setForm] = useState({
        email: '',
        message: '',
    });

    const handleChange = (e: { target: { name: string; value: unknown; }; }) => {
        setForm(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };


    function formSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        axios.post('/forgot-password', {
            email: form.email,
        })
            .then(function (response) {
                console.log(response);
                setForm(prevState => ({
                    ...prevState,
                    message: response.data.message
                }));
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
                        <h3 className="text-center">Forgot password</h3>
                        {errorJSX}

                        <Form id="resetForm" onSubmit={formSubmit}>
                            <FormGroup controlId="formHorizontalEmail">
                                <Col sm={12}>
                                    Email
                                </Col>
                                <Col sm={12}>
                                    <FormControl name="email" type="email" placeholder="Email" onChange={handleChange}/>
                                </Col>
                            </FormGroup>
                            <div className="clearfix"/>
                            <div className="pt-4"/>
                            <FormGroup>
                                <Col sm={12}>
                                    <Button className="btn-block" type="submit">Submit</Button>
                                </Col>
                            </FormGroup>
                            <Col className="pt-4" sm={12}>
                                Dont have account? <Link to={kRegisterRoute}>Register here</Link>
                            </Col>
                        </Form>
                    </div>
                </Row>
            </Container>
        </div>
    );
}

export default ForgotPasswordScreen;